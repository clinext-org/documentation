DOCKER_BUILDKIT=1 docker build --platform=linux/amd64 -t registry.tools.anak.dev/clinext/documentation . && docker push registry.tools.anak.dev/clinext/documentation:latest