import { useRef } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react'
import { GENERAL_CONFIG } from './config';

const VisualReport = ({ name, token = '' }) => {
  const reportRef = useRef(null)

  if(!token || token === ' ') {
    return null
  }

  return (
    <PowerBIEmbed
      embedConfig = {{
        type: 'visual', 
        visualName: name,
        accessToken: token,
        ...GENERAL_CONFIG
      }}
      eventHandlers = { 
        new Map([ 
          ['loaded', function () {            
              
          }],
          ['rendered', function (event) {
            console.log(event);
          }],
          ['error', function (event) {console.log(event.detail);}]
        ])
      }        
      cssClassName = { "visual-style-class" }
      getEmbeddedComponent = { (embeddedReport) => {
        reportRef.current = embeddedReport;
      }}
    />
  )
}

export default VisualReport