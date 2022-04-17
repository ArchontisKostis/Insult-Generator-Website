function makeHtmlPhoto(anInsult, icon){
    const json = {
        html: `<main> <div class='card' id='card'><div class='card-content'><h1 id='advice-id'>I'M SURE YOU LIKE IT</h1><p id='quote'>''${anInsult}''</p><img src='http://miamalakia.getenjoyment.net/images/pattern-divider-desktop.svg'></div></div>   </main>`,
        css: "@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap');body {display: flex;justify-content: center;align-items: center;flex-direction: column;background-color: hsl(213, 23%, 9%);font-family: 'Manrope', sans-serif;}main {display: flex;justify-content: center;align-items: center;flex-direction: row;width: 40em;height: 25em;}.card {display: flex;justify-content: center;align-items: center;flex-direction: column;background-color: hsl(217, 20%, 18%);box-shadow: 0 0 10px rgba(32, 32, 32, 0.201), 0 0 40px rgba(32, 32, 32, 0.322), 0 0 80px rgba(32, 32, 32, 0.322);border-radius: 15px;width: 30em;height: 18em;position: absolute;padding: 10px 20px 10px;}.card .card-content {display: flex;justify-content:center;align-items: center;flex-direction: column;height: 100%;width: 100%;}.card .card-content h1{color: hsl(2, 93%, 53%);font-size: 12px;letter-spacing: 0.3em;font-weight: 800;padding-bottom: 1em;}.card .card-content #quote {font-size: 23px;text-align: center;font-weight: 800;margin-top: 0;margin-bottom: 1em;color: rgba(255, 255, 255, 0.786);transition: all 1s;}"
      };
      
      const username = "3c464099-66c1-4128-a288-f22335efc190";
      const password = "fd60429f-f993-43e9-a07f-cda713ab163d";

      var dataSet = {};
      
      const options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(username + ":" + password)
        }
      }
      
      fetch('https://hcti.io/v1/image', options)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(res.status);
          }
        })
        .then(data => {
            icon.href = `https://twitter.com/intent/tweet?url=${data.url}`;
            icon.download = "insult.png"
        })
        .catch(err => console.error(err));

        return dataSet;
}


