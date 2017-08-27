set EfMigrationsProject=%1
set EfMigrationsStartupProject=%2
set EfMigrationsProjectDllName=%1.dll
set EfMigrationsStartupProjectDllName=%2.dll
set EfMigrationsDllDepsJson=%2.deps.json
set EfMigrationsRuntimeconfig=%2.runtimeconfig.json
dotnet exec --depsfile .\%EfMigrationsDllDepsJson% --runtimeconfig .\%EfMigrationsRuntimeconfig% ".\ef.dll" database update --assembly .\%EfMigrationsProject% --startup-assembly .\%EfMigrationsStartupProjectDllName% --project-dir "."