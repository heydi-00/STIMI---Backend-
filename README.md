STIMI - Sistema de Trazabilidad de Informes Mensuales de Instructores 
Descripción
STIMI es un backend desarrollado con NestJS y TypeScript para gestionar el proceso de pagos de instructores. El sistema permite administrar contratos, versiones, informes, actividades y evidencias asociadas a cada instructor, garantizando trazabilidad y control en cada etapa del proceso.

Tecnologías

NestJS - Framework de Node.js para backend escalable
TypeScript - Tipado estático
TypeORM - ORM para manejo de base de datos
MySQL - Motor de base de datos relacional
class-validator / class-transformer - Validación de DTOs


Estructura del Proyecto
src/
├── entities/        → Definición de las entidades de la base de datos
├── dto/             → Data Transfer Objects para entrada/salida de datos
├── services/        → Lógica de negocio
├── controllers/     → Manejo de rutas y peticiones 

Modelo de Datos
El sistema está compuesto por las siguientes entidades y sus relaciones:
EntidadDescripciónRelaciónareaÁrea a la que pertenece un instructor—personaInstructor o usuario del sistemaN:1 con area, N:1 con credencialcredencialCredenciales de acceso con rol—contratoContrato asociado a una personaN:1 con personaversionVersión generada de un contratoN:1 con contratoinformeInforme asociado a una versiónN:1 con versioninforme_gcInforme de gestión de calidad1:1 con informeinforme_gfInforme de gestión financiera1:1 con informeobligacionesObligaciones contenidas en un contratoN:1 con contratoactividadActividades de un informe GCN:1 con informe_gcevidenciasEvidencias de una actividadN:1 con actividadnovedadNovedades registradas en una versiónN:1 con version, N:1 con personainforme_obligacionTabla intermedia entre informe y obligacionesN:1 con informe, N:1 con obligaciones

Instalación
bash# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
npm run start:dev

# Ejecutar en producción
npm run start:prod

Variables de Entorno
envDB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=stimi

Endpoints (en construcción)
Cada entidad contará con sus respectivos endpoints REST:

GET /entidad — Listar todos
GET /entidad/:id — Obtener por ID
POST /entidad — Crear nuevo registro
PUT /entidad/:id — Actualizar registro
DELETE /entidad/:id — Eliminar registro


Estado del Proyecto
🚧 En desarrollo