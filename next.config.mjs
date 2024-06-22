/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Eliminar 'domains' ya que está deprecado
        // domains: ['utfs.io'], // Eliminar esta línea

        // Usar remotePatterns en su lugar
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '', // Dejar vacío si no se usa un puerto específico
                pathname: '**', // Usar '**' para permitir todos los caminos
            },
            // Puedes añadir más patrones si es necesario
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
