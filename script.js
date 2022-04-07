    <script>
    pdfjsLib.getDocument('https://cdn.glitch.global/08d92209-94cc-4b7d-bd6f-1f68c0023b53/MC%20CATALAGO%20ABRIL6_compressed.pdf?v=1649315419040').then(doc=> {
      console.log("This file has " + doc._pdfInfo.numPages + "pages");
      
      doc.getPage(1).then(page =>{
        var myCanvas= document.getElementById("my_canva");
        var context = myCanvas.getContext("2d");
        
        var viewport= page.getViewport(2, -90);
        myCanvas.Width = Viewport.width;
        myCanvas.height = viewport.height;
        
        page.render({
          cannvasContext: context,
          viewport: viewport
        })
      })
    });
    </script>