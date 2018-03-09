FROM node:8.10.0-onbuild

FROM microsoft/aspnetcore-build:2.0 AS build-env
WORKDIR /app

# Copy everything and build
COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
RUN ls
COPY --from=build-env /app/out/ .
RUN ls
ENTRYPOINT ["dotnet", "Competed.dll"]