FROM microsoft/aspnetcore-build:2.0 AS build-env
WORKDIR /app

# Copy everything and build
COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/aspnetcore:2.0

# Install Node (used for server pre-rendering)
RUN buildDeps='gnupg' \
     && set -x \
     && apt-get update && apt-get install -y $buildDeps --no-install-recommends \
     && rm -rf /var/lib/apt/lists/* \
     && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
     && apt install nodejs \
     && rm -rf /usr/lib/systemd/* \
     && apt-get purge -y --auto-remove $buildDeps \
     && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
     && node -v


WORKDIR /app
COPY --from=build-env /app/out/ .
ENTRYPOINT ["dotnet", "Competed.dll"]