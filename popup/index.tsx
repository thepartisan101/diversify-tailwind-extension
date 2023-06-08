import { useState, useEffect, useRef } from "react"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")
  const galleryRef = useRef<HTMLDivElement>(null);

  // Set behaviour for horizontal mouse scrolling on gallery
  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    if (galleryRef.current) {
        galleryRef.current.scrollLeft += event.deltaY;
    }
  };

  // Example gallery data
  const images = [
    {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficmedonline.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F06%2FMensHealth.jpeg&f=1&nofb=1&ipt=30f6830095e7ee9751289bf9bc424b225f8c0e0c6f8ff9f597961910edca1ebc&ipo=images",
      alt: ""
    },
    {
      src: "https://ak9.picdn.net/shutterstock/videos/12948479/thumb/1.jpg?i10c=img.resize(height:160)",
      alt: ""
    },
    {
      src: "https://st3.depositphotos.com/12548352/16211/i/950/depositphotos_162119670-stock-photo-serious-asian-businessman.jpg",
      alt: ""
    },
    {
      src: "https://assets.entrepreneur.com/content/3x2/2000/20170831222159-GettyImages-508082588-crop.jpeg",
      alt: ""
    },
  ]

  return (
    <div style={{width: '480px', height: '720px'}} className="flex flex-col p-4 bg-[#262a33]">
      <div className="flex flex-row w-full gap-3 justify-center items-center">
        <img src="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&format=svg" alt="" width="45" height="45" className="flex-none  bg-slate-100 drop-shadow-lg" loading="lazy" />
        <h1 className="text-2xl uppercase font-semibold text-white w-full text-left">Diversify</h1>
        <p className="font-italic text-ritgh whitespace-nowrap">
            <a href="https://www.ftstrategies.com/en-gb/" target="_blank" className="hover:text-[#15BCCC] text-white hover:underline underline-offset-2">by FT Strategies</a>
          </p>
      </div >
      <div className="max-w-lg mx-auto my-2 bg-[#FFF1E5] px-8 py-4 shadow-md rounded-lg">
          <div className="flex flex-row justify-between pb-4  ">
            <h2 className="text-xl font-semibold text-left ">Article Report</h2>
            <button
                type="submit"
                id="submit-form"
                className="bg-white hover:bg-[#262a33] border border-[#262a33] text-gray-900 hover:text-white font-bold px-2"
                >
                Generate Report
              </button>
          </div>

        {/* Inclusivity analysis section */}
        <div className="">
          <h3 className="text-small uppercase font-semibold mb-2 text-left">Inclusivity</h3>
          <table className="table-auto bg-[#FFFCFA] w-full" id="">
            <thead>
              <tr className="text-left pb-3">
                <th>Section</th>
                <th>Inclusivity Score</th>
              </tr>
            </thead>
            <tbody id="reviews-table-body">
              <tr className="text-left hover:bg-[#FFEBD9]">
                  <td>Headline</td>
                  <td>
                    <div className="inline-flex items-center">
                      <div className="w-2 h-2 mr-2 bg-[#96CC28] rounded-full"></div>
                      Positive
                    </div>
                  </td>
              </tr>
              <tr className="text-left hover:bg-[#FFEBD9]">
                  <td>Paragraph 1</td>
                  <td>
                    <div className="inline-flex items-center">
                      <div className="w-2 h-2 mr-2 bg-gray-500 rounded-full"></div>
                      Neutral
                    </div>
                  </td>
              </tr>
              <tr className="text-left hover:bg-[#FFEBD9]">
                  <td>Paragraph 2</td>
                  <td>
                    <div className="inline-flex items-center">
                      <div className="w-2 h-2 mr-2 bg-[#C00] rounded-full"></div>
                      Negative
                    </div>
                  </td>
              </tr>
              <tr className="text-left hover:bg-[#FFEBD9]">
                  <td>Paragraph 4</td>
                  <td>
                    <div className="inline-flex items-center">
                      <div className="w-2 h-2 mr-2 bg-gray-500 rounded-full"></div>
                      Neutral
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Source analysis section */}
        <div className="pt-4">
          <h3 className="text-small uppercase font-semibold mb-2 text-left">Sources</h3>
          <div className="flex flex-row gap-2 w-full justify-between items-center">
            <div className="w-2/3 h-2 bg-gray-200">
              <div className="h-full bg-[#0D7680]" style={{ width: '40%' }}></div>
            </div>
            <div>
              <p className="text-small font-semibold text-left">Male</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full justify-between items-center">
            <div className="w-2/3 h-2 bg-gray-200">
              <div className="h-full bg-[#990F3D]" style={{ width: '60%' }}></div>
            </div>
            <div>
              <p className="text-small font-semibold text-left">Female</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full justify-between items-center">
            <div className="w-2/3 h-2 bg-gray-200">
              <div className="h-full bg-[#00A0DD]" style={{ width: '10%' }}></div>
            </div>
            <div>
              <p className="text-small font-semibold text-left">Other</p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <h3 className="text-small uppercase font-semibold mb-2 text-left">Gendered language</h3>
          </div>

            {/* <div className="flex space-x-4 mb-4 pt-4">
              <div className="flex-1">
                <label for="decision-makers" className="block mb-2 text-left">Decision makers</label>
                <input type="text" id="decision-makers" className="w-full px-3 py-2 border rounded-lg" placeholder="CEO, COO, VP of Sales" required />
              </div>
              <div className="flex-1">
                <label for="company-location" className="block mb-2 text-left">Location</label>
                <input type="text" id="company-location" className="w-full px-3 py-2 border rounded-lg" placeholder="UK" required />
              </div>
            </div>
            <div className="mb-4">
              <label for="other" className="block mb-2 text-left">Other</label>
              <input type="text" id="other" className="w-full px-3 py-2 border rounded-lg" placeholder="has a sales team of 5 people" />
            </div> */}

        <div className="py-3">
          <h3 className="text-lg font-semibold mb-2 text-left">Media</h3>
          <div className="mb-4">
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" placeholder="Search images" />
          </div>
          <div
            className="flex overflow-x-scroll gap-x-2"
            ref={galleryRef}
            onWheel={handleWheel}
            >
            {images.map((image, index) => (
                  <img
                      key={index}
                      className="flex-none w-48 h-32 object-cover"
                      src={image.src}
                      alt={image.alt || "Gallery Image"}
                  />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
