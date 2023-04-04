import React from 'react'

export default function Paragraph({content}) {
  return (
    <div className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
      {
        content.map((para, idx) => {
          if (para.includes("<a>")) {
            const strSplit = para.split('<a>');
            console.log("🚀 ~ file: paragraph.jsx:10 ~ content.map ~ strSplit:", strSplit)
            const textBeforeLink = strSplit[0];
            const link = strSplit[1];
            const textAfterLink = strSplit[2];
            return (
              <p key={idx} className='pt-4 leading-8'>
                {textBeforeLink}
                <a href={link} target='blank' className='text-blue-500 hover:text-blue-700 '>{textAfterLink}</a>
              </p>
            )
          } else {
            return (<p key={idx} className='pt-4 leading-8'>{para}</p>)
          }
        })
      }
    </div>
  )
}
