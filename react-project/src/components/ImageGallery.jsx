import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript




function ImageGallery() {
    const images = [
        { src: 'https://static.vecteezy.com/system/resources/thumbnails/031/284/874/small/indian-food-on-a-wooden-table-ai-generated-free-photo.jpg', alt: 'Image 1' },
        { src: 'https://swagath.com.au/wp-content/uploads/2022/01/buffet-gd505df510_640.jpg', alt: 'Image 2' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKvRdjk5b-hIWOrdijr7cAlytQt6Lc8GsoA&usqp=CAU', alt: 'Image 3' },
        { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/681e516d-ef2a-49df-ba82-863158ba3024/dc8ilam-475aec2a-4ccf-4ec4-befe-7b18e3ddcff6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4MWU1MTZkLWVmMmEtNDlkZi1iYTgyLTg2MzE1OGJhMzAyNFwvZGM4aWxhbS00NzVhZWMyYS00Y2NmLTRlYzQtYmVmZS03YjE4ZTNkZGNmZjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Q_Cw5jn68RIeQCQkvnyjTrPHeyCbf9rA_KHzSRzt6D0', alt: 'Image 4' },
        { src: 'https://www.addtoevent.co.uk/sites/default/files/styles/square-large/public/term-suppliers/indian_catering.jpg', alt: 'Image 5' },
        { src: 'https://5.imimg.com/data5/MN/ZC/NQ/ANDROID-80148314/product-jpeg-500x500.jpg', alt: 'Image 6' },
      ];
    
      return (
        <div className="container">
          <h4 className='border-bottom'>Image Gallery</h4>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 pt-4">
                <img style={{ width: '300px', height: '300px' }}  src={image.src} className="img-fluid" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  
  


export default ImageGallery;
