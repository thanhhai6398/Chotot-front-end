import React, { useState } from 'react'

const ImageGallery = ({ images }) => {
  const [image, setImage] = useState(images[0])
  const handleClick = (index) => {
    setImage(images[index])
  }
  return (
    <div className="mx-auto mt-6 flex flex-col items-center max-w-xl sm:px-6">
      <div className="main mb-6 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <ul className="flex gap-2">
        {images.map((img, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className="hover:opacity-40"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain object-center w-24 h-24 overflow-hidden"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageGallery
