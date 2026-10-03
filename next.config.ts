import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite acessar o servidor de desenvolvimento (npm run dev) por
  // outros dispositivos na mesma rede (ex: celular pelo IP local).
  // Troque pelo IP que aparece no terminal quando você roda "npm run
  // dev" (linha "Network: http://SEU_IP:3000") — sem "http://" e sem
  // a porta. Ex: se aparecer "Network: http://192.168.1.23:3000",
  // use "192.168.1.23" (o IP muda de rede pra rede, então confira
  // sempre que trocar de Wi-Fi).
  allowedDevOrigins: ["10.0.0.117"],

  // Remove o iconezinho/indicador do Next.js que aparece no canto da
  // tela em modo de desenvolvimento (npm run dev). Não afeta o build
  // de produção, que já não mostra esse indicador.
  devIndicators: false,
};

export default nextConfig;