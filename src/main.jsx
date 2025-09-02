import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      components: {
          Table: {
            headerBg: "#722c27",
            colorTextHeading: "white",
            colorBgContainer: "white",
            fontFamily: "sans-serif",
            lineHeight: 2,
            lineType: "solid",
            lineWidth: 1,
            footerBg: "#9e6d6a",
            rowHoverBg: "#d9b6b4",
          },
        },
    }}>

    <App />
    </ConfigProvider>
  </StrictMode>,
)
