#!/bin/bash

SWAGGER_CONF="window.onload = function() {
  //<editor-fold desc=\"Changeable Configuration Block\">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: \"https://columbus.elmasy.com/openapi.yaml\",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: \"StandaloneLayout\"
  });

  //</editor-fold>
};
"


if [ -e "swagger-ui" ]
then
  rm -rf "swagger-ui"
fi

if [ -e "static/swagger" ]
then
  rm -rf "static/swagger"
fi


git clone https://github.com/swagger-api/swagger-ui.git
	

echo "$SWAGGER_CONF" > "swagger-ui/dist/swagger-initializer.js"

mv "swagger-ui/dist" "static/swagger"

rm -rf "swagger-ui"

rm -rf build
npm run build