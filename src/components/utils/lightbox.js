import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class ImageLightBox extends Component {
   state = {
      lightboxIsOpen: true,
      currentImage: this.props.pos,
      images: [],
   };

   static getDerivedStateFromProps(props, state) {
      if (props.images) {
         const images = [];
         props.images.forEach(element => images.push({ src: element }));
         return (state = { images });
      } else return false;
   }

   closeLightbox() {
      this.props.onClose();
   }

   render() {
      console.log(this.state.currentImage);
      return (
         <ModalGateway>
            {this.state.lightboxIsOpen && (
               <Modal
                  onClose={() => this.closeLightbox()}
                  styles={{
                     blanket: base => ({
                        ...base,
                        zIndex: 1000,
                     }),
                     positioner: base => ({
                        ...base,
                        zIndex: 1000,
                     }),
                  }}
               >
                  <Carousel
                     currentIndex={this.state.currentImage}
                     views={this.state.images}
                     isOpen={this.state.lightboxIsOpen}
                     styles={{
                        navigationNext: base => ({
                           ...base,
                           padding: '1px 10px',
                        }),
                        navigationPrev: base => ({
                           ...base,
                           padding: '1px 10px',
                        }),
                     }}
                  />
               </Modal>
            )}
         </ModalGateway>
      );
   }
}

export default ImageLightBox;
