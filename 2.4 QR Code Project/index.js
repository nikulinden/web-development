/* 
1. Gets user input for the website to create QR code for.
2. Uses the qr-image npm package to turn the user entered URL into a QR code image.
3. Creates a txt file to save the user input.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        name: 'webSite',
        message: 'Enter the URL you wanted to create the QR code for: ',
    },
  ])
  .then((answers) => {
    const url = answers.webSite;
    const qr_image = qr.image(url, { type: "png"});

    qr_image.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("webSite.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved. ");
    });
    // console.info("Answer:", answers.webSite);
  })

  .catch((error) => {
    console.error("The following error occurred ->:", error);
  });

