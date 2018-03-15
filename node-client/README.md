# TypeScript-compatible node client for Kubernetes

## Building

The process of making a new client is pretty _ad hoc_ at this point.

* Obtain [swagger-codegen][cg]. (For v1.7.14, we used SHA 4bdaf37ca5b61c3dce293951b408ada96668d4c7.)
* Run the following:

  ```bash
  $ ./run-in-docker.sh generate -i swagger-1.7.14.json -l typescript-node -o out
  ++ dirname ./run-in-docker.sh
  + cd .
  + maven_cache_repo=/Users/alex/.m2/repository
  + mkdir -p /Users/alex/.m2/repository
  ++ id -u
  ++ id -g
  + docker run --rm -it -w /gen -e GEN_DIR=/gen -e MAVEN_CONFIG=/var/maven/.m2 -u 501:20 -v /Users/alex/src/swagger-codegen:/gen -v /Users/alex/.m2/repository:/var/maven/.m2/repository --entrypoint /gen/docker-entrypoint.sh maven:3-jdk-7 generate -i swagger-1.7.14.json -l typescript-node -o out
  [main] INFO io.swagger.parser.Swagger20Parser - reading from swagger-1.7.14.json
  [main] INFO io.swagger.codegen.AbstractGenerator - writing file /gen/out/api.ts
  [main] INFO io.swagger.codegen.AbstractGenerator - writing file /gen/out/git_push.sh
  [main] INFO io.swagger.codegen.DefaultGenerator - writing file /gen/out/.gitignore
  [main] INFO io.swagger.codegen.AbstractGenerator - writing file /gen/out/.swagger-codegen/VERSION
  ```

* Copy `out/api.ts` to `src/api.ts`.
* Do `npm run build` and fix any build problems.

[cg]: https://github.com/swagger-api/swagger-codegen

## Publishing

To publish a version to NPM:

1. Be a member of the NPM `@carbonql` organization.
1. Run `npm publish --access=public`.
