function downloadFonts(cssString) {
  // Regular expressions to match font URLs
  const fontRegex = /url\(([^)]+)\)/g;
  const urls = new Set();

  // Extract all URLs from the CSS
  let match;
  while ((match = fontRegex.exec(cssString)) !== null) {
    let url = match[1].replace(/["']/g, ""); // Remove quotes
    url = url.split("?")[0]; // Remove query parameters

    // Only include .woff, .woff2, and .eot files
    if (url.match(/\.(woff|woff2|eot)$/)) {
      urls.add(url);
    }
  }

  // Download each font file
  urls.forEach((url) => {
    const filename = url.split("/").pop();
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const fs = require("fs");
        const path = require("path");
        const outputDir = "fonts";

        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir);
        }

        fs.writeFileSync(path.join(outputDir, filename), Buffer.from(buffer));
      });
  });

  return Array.from(urls); // Returns array of all found font URLs
}
downloadFonts(`
@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-SuperItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-SuperItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-SuperItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-SuperItalic-Cy-Web.woff) format("woff");
    font-weight: 900;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Super-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Super-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Super-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Super-Cy-Web.woff) format("woff");
    font-weight: 900;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-BlackItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-BlackItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-BlackItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-BlackItalic-Cy-Web.woff) format("woff");
    font-weight: 800;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Black-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Black-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Black-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Black-Cy-Web.woff) format("woff");
    font-weight: 800;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-BoldItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-BoldItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-BoldItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-BoldItalic-Cy-Web.woff) format("woff");
    font-weight: 700;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Bold-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Bold-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Bold-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Bold-Cy-Web.woff) format("woff");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-SemiboldItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-SemiboldItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-SemiboldItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-SemiboldItalic-Cy-Web.woff) format("woff");
    font-weight: 600;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Semibold-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Semibold-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Semibold-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Semibold-Cy-Web.woff) format("woff");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-MediumItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-MediumItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-MediumItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-MediumItalic-Cy-Web.woff) format("woff");
    font-weight: 500;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Medium-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Medium-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Medium-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Medium-Cy-Web.woff) format("woff");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-RegularItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-RegularItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-RegularItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-RegularItalic-Cy-Web.woff) format("woff");
    font-weight: 400;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Regular-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Regular-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Regular-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Regular-Cy-Web.woff) format("woff");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-LightItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-LightItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-LightItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-LightItalic-Cy-Web.woff) format("woff");
    font-weight: 300;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Light-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Light-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Light-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Light-Cy-Web.woff) format("woff");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-ExtralightItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-ExtralightItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-ExtralightItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-ExtralightItalic-Cy-Web.woff) format("woff");
    font-weight: 200;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Extralight-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Extralight-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Extralight-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Extralight-Cy-Web.woff) format("woff");
    font-weight: 200;
    font-style: normal;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-ThinItalic-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-ThinItalic-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-ThinItalic-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-ThinItalic-Cy-Web.woff) format("woff");
    font-weight: 100;
    font-style: italic;
    font-stretch: normal
}

@font-face {
    font-family: Graphik LC Web;
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Thin-Cy-Web.eot);
    src: url(https://www.transactpro.eu/assets/fonts/Graphik-Thin-Cy-Web.eot?#iefix) format("embedded-opentype"),url(https://www.transactpro.eu/assets/fonts/Graphik-Thin-Cy-Web.woff2) format("woff2"),url(https://www.transactpro.eu/assets/fonts/Graphik-Thin-Cy-Web.woff) format("woff");
    font-weight: 100;
    font-style: normal;
    font-stretch: normal
}`);
