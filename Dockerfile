FROM microsoft/aspnetcore-build:2.0 AS build-env
WORKDIR /app

# Copy everything and build
COPY . ./

RUN ls
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
RUN ls
COPY --from=build-env /app/Competed/out/ .
RUN ls
EXPOSE 5000
ENTRYPOINT ["dotnet", "Competed.dll"]