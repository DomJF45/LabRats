import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import MyButton from '../button/MyButton';
import './Nav.css';
const LandingNav = () => {

  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <nav className="landingNav">
        <ul>
        <svg width="55" height="55" viewBox="0 0 67 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: "1rem"}}>
            <path d="M28.3949 10.0301C28.3949 14.1723 25.9325 17.5301 22.8949 17.5301C19.8574 17.5301 17.3947 15.0301 17.8947 11.0301C19.3947 7.53014 19.3947 4.03014 21.3947 2.03014C23.3947 2.03014 28.3949 5.88799 28.3949 10.0301Z" fill="#828A92"/>
            <path d="M63.3947 11.0301C63.3947 14.0677 60.8947 24.5301 60.8947 16.5301C59.514 16.5301 58.3947 14.0677 58.3947 11.0301C58.3947 7.99257 59.514 5.53014 60.8947 5.53014C62.8947 5.53014 63.3947 7.99257 63.3947 11.0301Z" fill="#828A92"/>
            <path d="M8 49C8 51.2091 6.20914 53 4 53C1.79086 53 0.5 51 0.5 49C0.5 46.7909 1 45.5 4 45C6.20914 45 8 46.7909 8 49Z" fill="#FFB4A2"/>
            <path d="M5.783 46.0562C5.34936 45.6252 4.73802 45.3542 4.00933 45.3012C3.7668 45.2832 3.51086 45.2902 3.24375 45.3222C3.02246 45.3492 2.80341 45.3992 2.5877 45.4622C2.38877 45.5162 2.1943 45.5892 2.00095 45.6682V43.4342C2.00095 41.5592 2.9744 39.7902 4.63519 38.6462L24.093 22.1762C24.7066 22.6272 25.594 22.7812 26.5932 22.5052C28.4417 21.9932 29.9405 20.2372 29.9405 18.5822C29.9405 18.1562 29.8388 17.7812 29.6599 17.4642L32.9905 14.6452C35.4179 12.9902 38.1416 12.6302 39.9991 13.3572L56.5723 20.5102C58.0711 21.0892 58.9998 22.4502 58.9998 23.9502C58.9998 23.9622 58.9998 23.9622 58.9998 23.9592V39.7062C58.4824 39.6212 57.909 39.6402 57.2932 39.8112C55.1496 40.4052 53.4117 42.4412 53.4117 44.3592C53.4117 46.2772 55.1496 47.3512 57.2932 46.7572C57.909 46.5872 58.4824 46.2882 58.9998 45.9162V48.0792C58.9998 49.7672 57.7157 51.2382 55.8861 51.6472L7.1085 64.5042C4.51449 65.0842 2.00095 63.3292 2.00095 60.9362V52.5952H2.00207C3.05152 52.4432 4.06968 51.9182 4.87102 51.1782C4.8889 51.1622 4.90343 51.1432 4.92019 51.1262C5.10013 50.9562 5.27112 50.7792 5.42647 50.5902C5.47788 50.5282 5.517 50.4592 5.56506 50.3952C5.67682 50.2452 5.79194 50.0972 5.88582 49.9382C5.9607 49.8132 6.01434 49.6802 6.07693 49.5502C6.12722 49.4452 6.18981 49.3422 6.23116 49.2352C6.32504 48.9932 6.39657 48.7462 6.44239 48.4962C6.48822 48.2442 6.5061 48.0022 6.49827 47.7712C6.48263 47.3092 6.36192 46.8922 6.15516 46.5382C6.05234 46.3602 5.92717 46.1992 5.783 46.0562Z" fill="#EEAF4B"/>
            <path d="M3.24284 45.3222C2.81926 45.3742 2.4035 45.5032 2.00004 45.6682V43.4332C2.00004 41.6982 3.3546 40.2002 5.25009 39.8372L26.6716 34.1292C26.6604 34.2322 26.6381 34.3352 26.6381 34.4372C26.6381 36.0922 28.1368 37.0182 29.9854 36.5052C31.8339 35.9932 33.3326 34.2372 33.3326 32.5822C33.3326 32.5042 33.3137 32.4352 33.3069 32.3602L56.8352 26.0912C58.1439 25.8662 58.7866 24.9752 58.9263 23.9652L58.9989 23.9502V39.7052C58.4814 39.6202 57.9081 39.6392 57.2923 39.8102C55.1487 40.4042 53.4108 42.4402 53.4108 44.3582C53.4108 46.2762 55.1487 47.3502 57.2923 46.7562C57.9081 46.5862 58.4814 46.2872 58.9989 45.9152V48.0782C58.9989 49.7662 57.7148 51.2372 55.8852 51.6462L7.10758 64.5032C4.51358 65.0832 2.00004 63.3282 2.00004 60.9352V52.5942C4.10117 52.2902 6.07825 50.4792 6.4426 48.4952C6.81253 46.4822 5.37974 45.0612 3.24284 45.3222Z" fill="#FCDF76"/>
            <path d="M30.1461 45.0072C30.1461 47.2612 32.188 48.5222 34.7071 47.8252C37.2262 47.1272 39.2681 44.7352 39.2681 42.4812C39.2681 40.2272 37.2262 38.9662 34.7071 39.6632C32.188 40.3602 30.1461 42.7532 30.1461 45.0072Z" fill="#F4C44E"/>
            <path d="M34.7071 39.6632C36.5758 39.1452 38.1785 39.7102 38.8826 40.9552C38.1785 42.5902 36.5758 44.0422 34.7071 44.5602C32.8385 45.0782 31.2358 44.5132 30.5317 43.2682C31.2358 41.6332 32.8385 40.1802 34.7071 39.6632Z" fill="#EEAF4B"/>
            <path d="M11.2616 50.5392C11.2616 52.1172 12.691 53.0002 14.4546 52.5112C16.2183 52.0232 17.6477 50.3482 17.6477 48.7702C17.6477 47.1922 16.2183 46.3092 14.4546 46.7982C12.691 47.2872 11.2616 48.9622 11.2616 50.5392Z" fill="#F4C44E"/>
            <path d="M42.5551 48.5392C42.5551 50.1172 43.9845 51.0002 45.7481 50.5112C47.5117 50.0222 48.9412 48.3482 48.9412 46.7702C48.9412 45.1922 47.5117 44.3092 45.7481 44.7982C43.9845 45.2872 42.5551 46.9622 42.5551 48.5392Z" fill="#EEAF4B"/>
            <path d="M20.2026 56.1652C20.2026 57.1902 21.1313 57.7642 22.278 57.4472C23.4236 57.1302 24.3535 56.0412 24.3535 55.0162C24.3535 53.9912 23.4247 53.4172 22.278 53.7342C21.1313 54.0512 20.2026 55.1392 20.2026 56.1652Z" fill="#EEAF4B"/>
            <path d="M20.9995 44.2772C20.9995 45.3022 21.9282 45.8762 23.0749 45.5592C24.2205 45.2422 25.1503 44.1532 25.1503 43.1282C25.1503 42.1032 24.2216 41.5292 23.0749 41.8462C21.9293 42.1632 20.9995 43.2512 20.9995 44.2772Z" fill="#EEAF4B"/>
            <path d="M48.94 33.7752C48.94 34.9022 49.9615 35.5332 51.22 35.1842C52.4795 34.8352 53.4999 33.6392 53.4999 32.5122C53.4999 31.3852 52.4784 30.7542 51.22 31.1032C49.9615 31.4522 48.94 32.6482 48.94 33.7752Z" fill="#F4C44E"/>
            <path d="M26.6379 34.4372C26.6379 36.0912 28.1366 37.0172 29.9852 36.5052C31.8337 35.9932 33.3325 34.2372 33.3325 32.5822C33.3325 30.9282 31.8337 30.0022 29.9852 30.5142C28.1377 31.0262 26.6379 32.7822 26.6379 34.4372Z" fill="#F4C44E"/>
            <path d="M31.8948 12.5301C33.8946 19.1377 33.1373 21.1886 27.8512 22.7884C22.5652 24.3883 19.8946 20.1377 17.8948 13.5301C19.8948 9.53014 21.3947 5.03014 21.3947 2.03014C26.6808 0.430287 29.895 5.92258 31.8948 12.5301Z" fill="#ADB5BD"/>
            <path d="M61.8231 16.9636C61.0377 21.9636 58.6667 30.7155 53.4619 28.8684C48.257 27.0213 45.9094 20.2498 48.2183 13.7438C50.5272 7.23774 56.6183 3.46095 61.8231 5.30806C63.0377 7.96358 60.5377 12.4636 61.8231 16.9636Z" fill="#ADB5BD"/>
            <path d="M31.0377 12.9636C32.5073 17.8193 31.3693 21.0673 27.669 22.1872C23.9688 23.3071 21.5073 20.3193 20.0377 15.4636C18.5681 10.6078 21.5377 11.4636 22.3471 4.60308C26.0473 3.48319 29.5681 8.10785 31.0377 12.9636Z" fill="#FFB4A2"/>
            <path d="M58.0377 19.9636C56.3786 24.6385 56.5093 28.8505 52.8659 27.5576C49.2225 26.2646 47.6139 21.4266 49.273 16.7517C50.9321 12.0768 53.8484 9.96358 57.5377 9.96358C62.0377 9.96358 59.6968 15.2887 58.0377 19.9636Z" fill="#FFB4A2"/>
            <line x1="5.61203" y1="46.6846" x2="11.3026" y2="39.6846" stroke="white"/>
            <line x1="6.02983" y1="46.5009" x2="14.0712" y2="46.9815" stroke="white"/>
            <line x1="5.78922" y1="46.5466" x2="13.5626" y2="42.9328" stroke="white"/>
            </svg>

          <li>LabRats</li>
          {/* <MyButton className='startBtn'>
            Get Started
          </MyButton> */}
         
            <MyButton className='nv-btn' onClick={() => navigate('/register')}>
              Get Started
            </MyButton>
          
        </ul>
      </nav>
    </>
  )
}

export default LandingNav