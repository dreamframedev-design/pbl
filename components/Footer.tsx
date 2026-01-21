import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-8 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        {/* Footer Content - All columns in one row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="brand-link flex flex-col items-start no-underline group">
              <svg 
                className="brand-logo h-12 w-auto mb-4" 
                viewBox="0 0 5306.6733 1228.0721" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="glyph-group">
                  <path className="path-pbl" d="M496.0758,91.0395h66.1615v384.2777c7.4668-4.393,14.075-8.0158,20.4155-12.0587,22.9442-14.6295,47.9078-23.5634,74.8061-27.4612,33.3785-4.8368,65.838-1.3969,96.9772,11.4303,17.9604,7.3985,34.3581,17.617,48.8042,30.955,27.6022,25.4848,47.1479,56.0303,58.7215,91.6721,7.7134,23.754,10.5034,48.2772,8.9621,73.1225-1.6429,26.4813-8.3651,51.7734-19.4626,75.97-10.2214,22.2862-23.9904,41.937-41.9674,58.5176-16.663,15.3686-35.8556,26.976-56.1711,36.9364-17.9846,8.8178-36.6276,15.6526-56.5368,17.5971-19.2354,1.8786-38.3944.2847-57.1706-5.1247-28.3893-8.1789-54.1125-21.4924-76.3757-40.7688-34.1197-29.5421-56.2871-66.4993-64.1616-111.1734-2.6899-15.2604-3.9314-30.9588-4.011-46.4664-.409-79.6171-.2099-159.237-.2502-238.856-.0372-73.455-.1711-146.9099-.1508-220.3649.0325-117.5947.148,49.3791.2903-68.2155.004-3.2539.7127-6.5069,1.1195-9.989ZM683.9582,759.7165c15.2678,1.3871,30.3421-2.471,44.7403-9.5346,20.5137-10.0637,37.0115-24.9389,50.0921-43.4128,15.6463-22.0973,25.016-46.6205,24.7166-74.0773-.2534-23.2391-6.107-45.1026-17.5059-65.4583-11.195-19.9918-26.6276-35.738-46.6437-46.8502-25.2664-14.0269-52.3043-17.2123-80.3655-11.8195-23.5348,4.5228-43.8735,15.7047-60.6425,32.7114-11.4454,11.6078-20.1576,25.2361-26.2184,40.5633-9.0434,22.8699-12.7117,46.5173-8.4405,70.6673,5.8386,33.012,22.5777,60.1216,48.4054,81.4687,20.5554,16.9896,43.5749,27.5054,71.862,25.7419Z" />
                  <path className="path-pbl" d="M166.6613,788.1513v370.2798c-1.9677.1641-3.4081.3872-4.8487.3889-19.3151.0232-38.6318-.1129-57.9443.1159-4.2562.0503-5.5275-1.6661-5.6374-5.4234-.2817-9.6309-.9553-19.2589-.9572-28.8881-.0489-242.1902-.0313-213.2513-.0256-455.4415.0003-13.3246-.3643-26.6611.0734-39.9713.9236-28.0883,7.3319-54.9864,18.5563-80.752,10.1549-23.3105,23.9551-44.3136,41.7512-62.3395,19.8034-20.0593,43.1162-34.9884,70.4109-43.0076,24.0327-7.0609,48.5387-10.5171,73.6472-9.1541,26.0966,1.4169,50.4474,8.7048,73.0503,21.7284,15.7359,9.0668,29.9762,20.1904,42.3813,33.4373,28.3806,30.3062,47.5079,65.3984,54.3936,106.7494,7.2818,43.7294.5675,85.3522-17.9608,125.3928-10.5306,22.7573-24.9067,42.7284-43.7693,59.0616-29.544,25.5824-63.4891,43.127-101.9734,50.5872-27.8053,5.3901-54.8362,1.1313-80.2181-11.4754-19.3961-9.6337-38.405-20.0472-57.5955-30.0959-.7054-.3693-1.5102-.5486-3.334-1.1926ZM165.1177,633.0942c.5726,6.6016.5697,13.3142,1.8171,19.7856,5.5094,28.5815,18.8242,52.8895,39.5937,73.4766,23.3718,23.1664,50.9774,35.0588,83.8919,34.1198,15.4158-.4397,30.1314-4.1936,43.7705-11.4543,25.9559-13.8176,45.3104-34.3184,58.6272-60.3193,12.2521-23.922,16.8033-49.2422,12.2854-76.1195-5.3302-31.7093-18.9381-58.6193-43.8755-79.3558-26.7704-22.2607-57.6716-30.1006-91.8615-25.8962-32.9586,4.053-58.805,20.7287-78.3874,46.7963-17.4033,23.1671-25.4613,49.8661-25.8615,78.9666Z" />
                  <path className="path-pbl" d="M959.0254,91.0397v7.8331c0,91.6204-.0237-25.4384.0076,66.182.0239,69.7963.1833,63.517.1644,133.3134-.0264,98.1148-.1409,196.2295-.2819,294.3442-.0151,10.4687-.5458,20.9356-.6852,31.4053-.4749,35.6612,11.3093,66.8076,34.3999,93.8833,14.5911,17.1093,31.638,30.6268,53.4239,37.2183,5.155,1.5596,10.685,2.0246,16.0846,2.5882,5.4067.5642,10.8663.6217,16.6274.9179v73.6154c-4.883-.3903-9.7756-.4944-14.5768-1.2119-31.1714-4.6576-60.4303-14.6904-86.7353-32.2948-45.4049-30.3869-73.0521-72.7014-82.7511-126.3993-2.4931-13.8024-3.8277-27.9968-3.9118-42.0218-.4558-75.9569-.291-151.9173-.4581-227.8762-.1653-75.1026-.658-74.1292-.6613-149.2316-.0032-72.4366.4708,63.806.6672-8.6308.1291-47.6408.1298-95.2819.2063-142.9228.0172-10.7121.0523-10.7121,10.4353-10.7121,17.3185,0,34.637.0001,51.9555.0002,1.7929,0,3.5858,0,6.0894,0Z" />
                </g>
                <g className="science-group" style={{ transform: 'translateX(24px)' }}>
                  <path className="path-science" d="M1207.9645,831.479h-50.5049l146.0742-397.8184h49.7275l146.0732,397.8184h-50.5039l-118.8789-334.8818h-3.1084l-118.8789,334.8818ZM1226.6119,676.0815h203.5713v42.7344h-203.5713v-42.7344Z" />
                  <path className="path-science" d="M1762.4752,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
                  <path className="path-science" d="M2100.944,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
                  <path className="path-science" d="M2232.1549,831.479h-50.5049l146.0742-397.8184h49.7275l146.0732,397.8184h-50.5039l-118.8789-334.8818h-3.1084l-118.8789,334.8818ZM2250.8024,676.0815h203.5713v42.7344h-203.5713v-42.7344Z" />
                  <path className="path-science" d="M2485.8541,433.6606h55.167l110.332,185.7002h4.6621l110.332-185.7002h55.166l-143.7422,233.874v163.9443h-48.1738v-163.9443l-143.7432-233.874Z" />
                  <path className="path-science" d="M3255.069,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
                  <path className="path-science" d="M3691.8883,557.979h-48.1738c-2.8496-13.8555-7.8027-26.0293-14.8594-36.5186-7.0596-10.4893-15.6064-19.3271-25.6406-26.5146-10.0371-7.1875-21.1426-12.5928-33.3135-16.2197-12.1738-3.624-24.8643-5.4385-38.0723-5.4385-24.0869,0-45.876,6.0879-65.3643,18.2588-19.4922,12.1738-34.9648,30.1084-46.4258,53.8066-11.46,23.6982-17.1904,52.7715-17.1904,87.2168s5.7305,63.5186,17.1904,87.2168c11.4609,23.6982,26.9336,41.6357,46.4258,53.8066,19.4883,12.1738,41.2773,18.2598,65.3643,18.2598,13.208,0,25.8984-1.8125,38.0723-5.4395,12.1709-3.624,23.2764-9.0322,33.3135-16.2197,10.0342-7.1865,18.5811-16.0557,25.6406-26.6113,7.0566-10.5537,12.0098-22.6943,14.8594-36.4219h48.1738c-3.627,20.332-10.2314,38.5283-19.8135,54.584-9.585,16.0586-21.498,29.6895-35.7412,40.8887-14.2471,11.2021-30.2061,19.7158-47.8818,25.5439-17.6768,5.8271-36.5527,8.7402-56.623,8.7402-33.9297,0-64.1016-8.2852-90.5195-24.8633-26.418-16.5742-47.2021-40.1426-62.3535-70.7061-15.1514-30.5605-22.7266-66.8213-22.7266-108.7783s7.5752-78.2148,22.7266-108.7783c15.1514-30.5605,35.9355-54.1279,62.3535-70.7061,26.418-16.5742,56.5898-24.8633,90.5195-24.8633,20.0703,0,38.9463,2.9131,56.623,8.7412,17.6758,5.8271,33.6348,14.3438,47.8818,25.543,14.2432,11.2031,26.1562,24.7998,35.7412,40.792,9.582,15.9951,16.1865,34.2207,19.8135,54.6807Z" />
                  <path className="path-science" d="M3806.7604,433.6606v397.8184h-48.1738v-397.8184h48.1738Z" />
                  <path className="path-science" d="M3894.0738,831.479v-397.8184h240.0898v42.7344h-191.916v134.4189h179.4844v42.7344h-179.4844v135.1963h195.0244v42.7344h-243.1982Z" />
                  <path className="path-science" d="M4515.6373,433.6606v397.8184h-46.6191l-216.7803-312.3496h-3.8848v312.3496h-48.1738v-397.8184h46.6201l217.5566,313.127h3.8848v-313.127h47.3965Z" />
                  <path className="path-science" d="M4922.0377,557.979h-48.1738c-2.8496-13.8555-7.8027-26.0293-14.8594-36.5186-7.0596-10.4893-15.6064-19.3271-25.6406-26.5146-10.0371-7.1875-21.1426-12.5928-33.3135-16.2197-12.1738-3.624-24.8643-5.4385-38.0723-5.4385-24.0869,0-45.876,6.0879-65.3643,18.2588-19.4922,12.1738-34.9648,30.1084-46.4258,53.8066-11.46,23.6982-17.1904,52.7715-17.1904,87.2168s5.7305,63.5186,17.1904,87.2168c11.4609,23.6982,26.9336,41.6357,46.4258,53.8066,19.4883,12.1738,41.2773,18.2598,65.3643,18.2598,13.208,0,25.8984-1.8125,38.0723-5.4395,12.1709-3.624,23.2764-9.0322,33.3135-16.2197,10.0342-7.1865,18.5811-16.0557,25.6406-26.6113,7.0566-10.5537,12.0098-22.6943,14.8594-36.4219h48.1738c-3.627,20.332-10.2314,38.5283-19.8135,54.584-9.585,16.0586-21.498,29.6895-35.7412,40.8887-14.2471,11.2021-30.2061,19.7158-47.8818,25.5439-17.6768,5.8271-36.5527,8.7402-56.623,8.7402-33.9297,0-64.1016-8.2852-90.5195-24.8633-26.418-16.5742-47.2021-40.1426-62.3535-70.7061-15.1514-30.5605-22.7266-66.8213-22.7266-108.7783s7.5752-78.2148,22.7266-108.7783c15.1514-30.5605,35.9355-54.1279,62.3535-70.7061,26.418-16.5742,56.5898-24.8633,90.5195-24.8633,20.0703,0,38.9463,2.9131,56.623,8.7412,17.6758,5.8271,33.6348,14.3438,47.8818,25.543,14.2432,11.2031,26.1562,24.7998,35.7412,40.792,9.582,15.9951,16.1865,34.2207,19.8135,54.6807Z" />
                  <path className="path-science" d="M4987.8063,831.479v-397.8184h240.0898v42.7344h-191.916v134.4189h179.4844v42.7344h-179.4844v135.1963h195.0244v42.7344h-243.1982Z" />
                </g>
              </svg>
              <div className="glow-line"></div>
            </Link>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Products</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/products/assay-kits" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Assay Kits</Link>
              </li>
              <li>
                <Link href="/products/proteins" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Proteins</Link>
              </li>
              <li>
                <Link href="/products/antibodies" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Antibodies</Link>
              </li>
              <li>
                <Link href="/products/antibodies/monoclonal" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Monoclonal (MAbs)</Link>
              </li>
              <li>
                <Link href="/products/antibodies/polyclonal" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Polyclonal (PAbs)</Link>
              </li>
              <li>
                <Link href="/products/proteins/interferons" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Interferons</Link>
              </li>
              <li>
                <Link href="/products/proteins/interferon-decoy-receptor" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Decoy Receptors</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Services</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/services/assay-development" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Assay Development</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Biomarker Analysis</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis/simoa" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">SIMOA Services</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis/smc" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">SMC Services</Link>
              </li>
              <li>
                <Link href="/services/cell-based-services" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Cell-Based Services</Link>
              </li>
              <li>
                <Link href="/services/custom-production" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Custom Production</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Resources</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/blog" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Blog</Link>
              </li>
              <li>
                <Link href="/resources" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Resources</Link>
              </li>
              <li>
                <Link href="/resources" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">General Protocols</Link>
              </li>
              <li>
                <Link href="/resources" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Scientific Articles</Link>
              </li>
              <li>
                <Link href="/resources" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Technical Presentations</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Support</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/contact-us" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Shipping Info</Link>
              </li>
              <li>
                <Link href="/contact-us" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Distributors</Link>
              </li>
              <li>
                <Link href="/contact-us" className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Company</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <a
                  href="https://www.pblassaysci.com/index.php/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/index.php/company-basic-pages/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/location-directions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/trademarks-disclaimers-terms-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Company Policies &amp; Terms
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/history"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Our History
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/pbl-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  PBL Team
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://www.pblassaysci.com/belief-vision-values"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-2 hover:text-[#058A9F] transition-all py-1"
                >
                  Company Values
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 lg:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-300 tracking-widest uppercase italic">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} PBL ASSAY SCIENCE.</p>
            <a
              href="https://www.linkedin.com/company/pbl-assay-science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-6 sm:gap-8 lg:gap-10 text-slate-400">
            <a href="https://www.pblassaysci.com/node/34" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="/sitemap.xml" className="hover:text-slate-600 transition-colors">Site map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

