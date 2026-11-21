# Proyecto-web-asistido-por-inteligencia-artificial-
Proyecto web que es asistido de manera local y en la nube por diferentes modelos de inteligencia artificial con el objetivo de construir modulos, encontrar y corregir errores y verificar el estatus del proyecto

# Requisitos de Instalación
1.Sistema oprativo windows, linux o macOS
2.Memoria ram miníma de 16 GB
3.Almacenamiento minimo de 250 GB
4.Tarjeta Grafica RTX 2050 0 más 
5.Visual Studio Code

# Instalación Ollama y modelo de IA
1.Instalar ollama desde la pagina web: https://ollama.com/download, selecciona el sistema operativo y sigue los pasos de descarga
2.Descargar modelo qwen2.5-coder:3b 

# Integración a Visual Studio Code
1.Descargar las extensiones line server y Continue (ignora el inicio de sesión)
2.Pegar la configuración en config.yaml y recarga Continue
3.En continue dejar en modo chat no agente
4.Mandar un saludo

# Configuración para config.yaml

# Taller ISC'2026 — equipos limitados.
# Sin rol de agente: los modelos pequeños no manejan herramientas.
name: Taller IA ITSVA
version: 1.0.0
schema: v1
models:
-name: Chat y edición (qwen2.5-coder:1.5b)
    provider: ollama
    model: qwen2.5-coder:1.5b
    roles:
      - chat
      - edit