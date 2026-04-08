const ftp = require("basic-ftp");
const path = require("path");
require("dotenv").config();

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log("🚀 Iniciando Deploy para HostGator...");
    
    // Verificando se as credenciais estão preenchidas
    if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PASS) {
      throw new Error("❌ ERRO: Você precisa preencher o arquivo .env com suas credenciais FTP.");
    }

    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false // HostGator geralmente usa FTP padrão, mude para true se tiver FTPS
    });

    const remoteDir = process.env.REMOTE_DIR || "/public_html";
    console.log(`📂 Conectado! Enviando arquivos para: ${remoteDir}`);

    // Limpar o diretório remoto antes do upload (CUIDADO: Isso remove o que estiver lá)
    // Se preferir apenas sobrescrever sem apagar o resto, comente a linha abaixo
    // await client.clearWorkingDir(); 

    // Função customizada para enviar arquivos ignorando vídeos pesados
    const fs = require("fs");
    async function uploadDirectory(localDirPath, remoteDirPath) {
      await client.ensureDir(remoteDirPath);
      const entries = fs.readdirSync(localDirPath, { withFileTypes: true });
      for (const entry of entries) {
        const localPath = path.join(localDirPath, entry.name);
        const remotePath = remoteDirPath + (remoteDirPath.endsWith("/") ? "" : "/") + entry.name;
        
        if (entry.name.endsWith(".mp4") || entry.name.endsWith(".webm")) {
          console.log(`⏩ Ignorando vídeo pesado para acelerar o deploy: ${entry.name}`);
          continue;
        }
        
        if (entry.isDirectory()) {
          await uploadDirectory(localPath, remotePath);
          await client.cd(remoteDirPath); // Volta para o diretório pai após recursão
        } else {
          await client.uploadFrom(localPath, remotePath);
        }
      }
    }

    // Upload da pasta dist inteira, exceto vídeos
    await uploadDirectory(path.join(__dirname, "../dist"), remoteDir);

    console.log("✅ DEPLOY CONCLUÍDO COM SUCESSO! 🛰️✨");
    console.log(`🌍 Verifique em: https://uptower.com.br/`);

  } catch (err) {
    console.error("❌ ERRO NO DEPLOY:", err.message);
  } finally {
    client.close();
  }
}

deploy();
