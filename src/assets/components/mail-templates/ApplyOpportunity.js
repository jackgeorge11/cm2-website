exports.log = (title) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>ConnecMe2</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800");
  
        body {
          font-family: "Manrope", sans-serif;
        }
  
        h1 {
          font-size: 2rem;
          font-weight: 400;
        }
  
        h2 {
          font-size: 1.5rem;
          font-weight: 300;
        }
  
        h3 {
            font-size: 1rem;
          font-weight: 300;
          margin-bottom: 5px;
        }

        a {
          color: orange;
        }

        p {
            font-size: .55rem;
        }

        .icons {
            margin-bottom: 25px;
        }
  
        .icons > a {
          margin-right: 5px;
        }
      </style>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <h1>${title}</h1>
      <h2>
        Someone from our team will be in touch soon regarding next steps. If you have any questions, or just want to say hello, feel free to send us an email at <a href="mailto:hello@cm2.co.uk">hello@cm2.co.uk</a>.
      <div class="socials">
        <h3>In the meantime, let's get social!</h3>
        <div class="icons">
          <a
            href="https://www.facebook.com/ConnecMe2/"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/facebook-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
              alt="Facebook"
          /></a>
          <a
            href="https://instagram.com/connecme2"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/instagram-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
              alt="Instagram"
          /></a>
          <a
            href="https://www.linkedin.com/company/connecme2/"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/linkedin-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
              alt="Linkedin"
          /></a>
          <a
            href="https://www.youtube.com/channel/UCMPpu68pn_wJpiguGPNPlmA"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/youtube-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
              alt="Youtube"
          /></a>
          <a
            href="https://twitter.com/connecme2"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/twitter-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
              alt="Twitter"
          /></a>
          <a
            href="https://www.tiktok.com/@connecme2"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://cdn.exclaimer.com/Handbook%20Images/TikTok_logo_24.png?_ga=2.157322877.676658505.1636550838-628138744.1636550838"
              alt="Tik Tok"
          /></a>
          <p className="disclaimer">
          This e-mail, the information contained in it and any files or attachments transmitted with it are confidential and may be legally privileged. They are intended solely for the use of the intended recipient(s). Access to this e-mail by anyone else is unauthorised. 
          The content of this e-mail and any files or attachments transmitted with it may have been changed or replaced without the consent of the author, and in circumstances where the content of this e-mail is important you should not rely on its integrity without checking it by telephone or fax. ConnecMe2 does not accept any responsibility for any breach of confidence which may arise from the use of e-mail as a means of communication If you are not the intended recipient, any review, dissemination, disclosure, alteration, printing, copying, transmission or other use of this e-mail is prohibited and may, in certain circumstances, be a criminal offence, as may any action taken or omitted to be taken in reliance on it. 
          Please also note that any views, opinions or advice contained in this e-mail are those of the sending individual, except where the sender specifically states them to be the views of ConnecMe2. 
          </p>
        </div>
      </div>
      <script src="" async defer></script>
    </body>
  </html>
    `;
};
