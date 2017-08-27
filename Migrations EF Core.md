# Migraciones con Entity Framework Core

## Mediante SQL
#### Instalar
Microsoft.EntityFrameworkCore.Design  
Npgsql.EntityFrameworkCore.PostgreSQL.Design  

#### Generar Script Sql
`dotnet ef migrations script --output <FILE> --startup-project <proyecto de inicio>`  
ó  
`dotnet ef migrations script --output <FILE> --idempotent --startup-project <proyecto de inicio>`  

#### Ejecutar script en Postgres
`psql -U <usuraio> -d <base de datos> -a -f <Ruta del archivo>`  

**Nota:** El archivo debe estar codificado en *UTF-8 sin BOM*  

## Migraciones con un proyecto publicado

_Nota: Esto fue provado en un projecto .Net Core 2.0_

* > Copiar **ef.dll** en la carpeta donde esta el proyecto        publicado.  

  > Para mi este se encuentra en _C:\Program Files\dotnet\sdk\NuGetFallbackFolder\microsoft.entityframeworkcore.tools\2.0.0\tools\netcoreapp2.0_

* >Ejecutar el archivo migrations2.bat  
  `migrations2 <Nombre proyecto> <nombre proyecto de inicio>`  
    
  >Esto ejecuta todas las migraciones en la base de datos objetivo