const NaverMap = () => {
  (async () => {
    const rawResponse = await fetch(
      "https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          "X-NCP-APIGW-API-KEY-ID": "cvx6scy26o",
          "X-NCP-APIGW-API-KEY": "RHECfiNfcZGCKKpe3Lrn3k9FLGg15bHA3leOlxca",
        },
      },
    );
    const content = await rawResponse.json();

    console.log(content);
  })();

  return <div>done</div>;
};
