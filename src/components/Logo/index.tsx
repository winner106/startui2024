import { ComponentProps, useId } from 'react';

import { chakra, useTheme } from '@chakra-ui/react';

export const Logo = ({ ...rest }: ComponentProps<typeof chakra.svg>) => {
  const theme = useTheme();
  const gradientId = useId();
  return (
    <chakra.svg
      fill="none"
      viewBox="0 0 673 116"
      // maxW="full"
      // w="10rem"
      width="64"
      height="64"
      {...rest}
    >
      <path
        d="M92.001 108C64.3868 108 42.001 85.6144 42.001 58.0002C42.001 30.3859 64.3868 8.0002 92.001 8.0002C119.615 8.0002 142.001 30.3859 142.001 58.0002C142.001 85.6144 119.615 108 92.001 108ZM92.001 104C66.5959 104 46.001 83.4052 46.001 58.0002C46.001 32.5951 66.5959 12.0002 92.001 12.0002C117.406 12.0002 138.001 32.5951 138.001 58.0002C138.001 83.4052 117.406 104 92.001 104Z"
        fill-rule="evenodd"
        fill="#0078D4"
      ></path>
      <path d="M42.001 58.0002C42.001 85.6144 64.3868 108 92.001 108C119.615 108 142.001 85.6144 142.001 58.0002C142.001 30.3859 119.615 8.0002 92.001 8.0002C64.3868 8.0002 42.001 30.3859 42.001 58.0002ZM46.001 58.0002C46.001 83.4052 66.5959 104 92.001 104C117.406 104 138.001 83.4052 138.001 58.0002C138.001 32.5951 117.406 12.0002 92.001 12.0002C66.5959 12.0002 46.001 32.5951 46.001 58.0002Z"></path>
      <g mask="url(#mask-20_22)">
        <path
          d="M42.001 8.00024L42.001 108L142.001 108L142.001 8.00024L42.001 8.00024Z"
          fill="#F3C900"
        ></path>
      </g>
      <g filter="url(#filter_20_31)">
        <path
          d="M107.319 42.261L93.7154 42.261C92.6917 42.261 91.8618 41.4396 91.8618 40.4262L91.8618 27.0583C91.882 26.0814 91.1252 25.2603 90.1407 25.1907L66.3422 25.1907C65.3003 25.1907 64.4556 26.0268 64.4556 27.0583L64.4556 77.5158C64.4556 78.5472 65.3003 79.3834 66.3422 79.3834L107.319 79.3834C108.361 79.3834 109.206 78.5472 109.206 77.5158L109.206 44.1286C109.206 43.0972 108.361 42.261 107.319 42.261Z"
          fill="url(#linear_fill_20_31)"
        ></path>
      </g>
      <g filter="url(#filter_20_32)">
        <path
          d="M109.461 43.4228L91.002 25.1401L91.002 39.9536C91.002 41.8696 92.5613 43.4228 94.4849 43.4228L109.461 43.4228Z"
          fill="#4A4C4A"
        ></path>
      </g>
      <g filter="url(#filter_20_34)">
        <path
          fill="#FFFFFF"
          d="M71.6406 45.9854L84.8046 45.9854L84.8046 43.3826L71.6406 43.3826L71.6406 45.9854"
        ></path>
      </g>
      <g filter="url(#filter_20_35)">
        <path
          fill="#FFFFFF"
          d="M71.6406 39.9122L84.8046 39.9122L84.8046 37.3093L71.6406 37.3093L71.6406 39.9122"
        ></path>
      </g>
      <g filter="url(#filter_20_36)">
        <path
          fill="#FFFFFF"
          d="M71.6406 52.0589L79.539 52.0589L79.539 49.4561L71.6406 49.4561L71.6406 52.0589"
        ></path>
      </g>
      <g filter="url(#filter_20_37)">
        <path
          d="M72.5181 65.073L72.5181 72.8815L78.6613 72.8815L78.6613 65.073L72.5181 65.073Z"
          fill="url(#linear_fill_20_37)"
        ></path>
      </g>
      <g filter="url(#filter_20_38)">
        <path
          d="M83.0493 58.1321L83.0493 72.8814L89.1925 72.8814L89.1925 58.1321L83.0493 58.1321Z"
          fill="url(#linear_fill_20_38)"
        ></path>
      </g>
      <g filter="url(#filter_20_39)">
        <path
          d="M93.5806 49.4561L93.5806 72.8815L99.7238 72.8815L99.7238 49.4561L93.5806 49.4561Z"
          fill="url(#linear_fill_20_39)"
        ></path>
      </g>
      <g filter="url(#filter_20_41)">
        <path
          d="M58.9595 72.8162L56.8375 70.6876C56.5776 70.427 56.5777 70.0052 56.8376 69.7446L70.4498 56.0964C70.7103 55.8352 71.1331 55.8347 71.3942 56.0951C71.3947 56.0956 71.3951 56.096 71.3956 56.0965L73.5176 58.225C73.7775 58.4857 73.7774 58.9075 73.5175 59.1681L59.9053 72.8163C59.6448 73.0775 59.222 73.078 58.9609 72.8176C58.9604 72.8171 58.96 72.8167 58.9595 72.8162Z"
          fill="#C7A701"
        ></path>
      </g>
      <g filter="url(#filter_20_42)">
        <path
          d="M93.0931 50.5319C93.0931 58.5238 86.6144 65.0025 78.6225 65.0025C70.6306 65.0025 64.1519 58.5238 64.1519 50.5319C64.1519 42.54 70.6306 36.0613 78.6225 36.0613C86.6144 36.0613 93.0931 42.54 93.0931 50.5319Z"
          fill="#F7CF00"
        ></path>
      </g>
      <g filter="url(#filter_20_43)">
        <path
          d="M90.0899 50.8049C90.0899 57.1381 84.9558 62.2722 78.6226 62.2722C72.2894 62.2722 67.1553 57.1381 67.1553 50.8049C67.1553 44.4717 72.2894 39.3376 78.6226 39.3376C84.9558 39.3376 90.0899 44.4717 90.0899 50.8049Z"
          fill="#5F5F5F"
        ></path>
      </g>
      <g filter="url(#filter_20_44)">
        <path
          d="M82.0708 50.5985L78.7135 44.7983L75.5989 53.1315L72.7675 47.2212L69.2889 52.9847L67.4282 52.9847C67.4282 53.9253 67.6023 54.1539 67.8651 54.71L70.381 54.71L72.5652 51.0757L75.8012 57.9038L79.0775 49.1301L81.7876 54.1227L85.1449 48.9833L89.926 48.9833C89.8075 48.3988 89.7529 48.0059 89.6104 47.2579L84.255 47.2579L82.0708 50.5985Z"
          fill="#FFFFFF"
        ></path>
      </g>
      <g filter="url(#filter_20_46)">
        <path
          d="M126.981 76.02C126.981 85.3868 119.388 92.98 110.021 92.98C100.654 92.98 93.061 85.3868 93.061 76.02C93.061 66.6533 100.654 59.0601 110.021 59.0601C119.388 59.0601 126.981 66.6533 126.981 76.02Z"
          fill="#000000"
        ></path>
      </g>
      <path
        d="M126.981 76.02C126.981 85.3868 119.388 92.98 110.021 92.98C100.654 92.98 93.061 85.3868 93.061 76.02C93.061 66.6533 100.654 59.0601 110.021 59.0601C119.388 59.0601 126.981 66.6533 126.981 76.02Z"
        fill="#FFFFFF"
      ></path>
      <path
        d="M99.9507 67.5403L108.381 67.5403L108.381 75.4085L99.9507 75.4085L99.9507 67.5403Z"
        fill="#E86C60"
      ></path>
      <path
        d="M111.19 67.5403L119.62 67.5403L119.62 75.407L111.19 75.407L111.19 67.5403Z"
        fill="#72C472"
      ></path>
      <path
        d="M99.9507 78.0295L108.381 78.0295L108.381 85.8978L99.9507 85.8978L99.9507 78.0295Z"
        fill="#43A6DD"
      ></path>
      <path
        d="M111.19 78.0295L119.62 78.0295L119.62 85.8978L111.19 85.8978L111.19 78.0295Z"
        fill="#EFD358"
      ></path>
      <g>
        <path
          fill="#A6A6A6"
          d="M219.62 78.224L230.092 78.224L230.092 42.456L218.668 42.456Q218.6 54.968 215.88 65.78Q213.16 76.592 206.972 87.2L195.752 87.2Q203.572 76.32 206.666 65.984Q209.76 55.648 209.828 42.456L194.868 42.456L194.868 33.48L209.828 33.48L209.828 25.32L218.668 25.32L218.668 33.48L238.932 33.48L238.932 87.2L219.62 87.2L219.62 78.224ZM190.176 75.572Q195.004 61.224 197.316 46.264L205.408 46.264Q203.164 62.312 198.676 75.572L190.176 75.572ZM250.152 39.192Q252.872 57.348 253.62 79.992L245.188 79.992Q244.508 60.136 241.72 39.192L250.152 39.192ZM261.916 77.952L269.94 77.952L285.308 45.176L295.576 45.176L280.208 77.952L304.62 77.952L300.404 67.684L310.468 67.684L318.288 86.656L261.916 86.656L261.916 77.952ZM257.836 59.048Q263.82 49.8 267.492 41.606Q271.164 33.412 273.34 24.64L282.792 24.64Q280.684 33.956 277.386 42.252Q274.088 50.548 269.124 59.048L257.836 59.048ZM306.66 24.64Q308.836 33.412 312.508 41.606Q316.18 49.8 322.164 59.048L310.876 59.048Q305.912 50.548 302.614 42.252Q299.316 33.956 297.208 24.64L306.66 24.64ZM360.38 87.132Q351.336 83.528 344.672 77.544Q337.396 84.14 326.924 87.88L326.924 78.428Q333.248 76.048 338.076 71.832Q332.364 64.216 330.732 53.608L339.028 53.608Q340.524 60.816 344.672 66.256Q346.508 63.74 347.63 60.714Q348.752 57.688 349.636 53.608L357.932 53.608Q357.048 59.252 355.484 63.706Q353.92 68.16 351.268 71.832Q356.096 76.048 362.42 78.428L362.42 83.936Q366.908 76.524 370.512 68.16L366.092 54.56L358.272 54.56L358.816 52.86L347.256 48.44L347.256 40.008L359.632 44.768L359.632 50.344Q361.536 44.088 362.76 38.24Q363.984 32.392 364.732 25.456L373.504 25.456Q373.028 29.944 372.62 32.664L390.028 32.664L390.028 41.504L387.036 41.504Q385.744 54.084 381.324 66.868L389.484 87.2L380.644 87.2L376.36 76.388Q373.776 83.052 371.192 87.2L362.42 87.2L362.42 87.88L360.584 87.2L360.312 87.2L360.38 87.132ZM327.604 30.08L340.524 30.08L340.524 24.64L349.364 24.64L349.364 30.08L361.06 30.08L361.06 38.648L327.604 38.648L327.604 30.08ZM327.672 44.768L341.408 40.008L341.408 48.44L327.672 53.2L327.672 44.768ZM375.34 57.892Q377.992 49.392 378.944 41.504L371.056 41.504Q371.056 41.776 370.92 42.32L375.34 57.892ZM401.724 52.588L410.904 52.588L405.6 66.324L396.488 66.324L401.724 52.588ZM394.72 69.656L421.512 69.656L421.512 66.188L430.488 66.188L430.488 69.656L457.28 69.656L457.28 77.816L430.488 77.816L430.488 87.2L421.512 87.2L421.512 77.816L394.72 77.816L394.72 69.656ZM405.804 38.784L411.108 50.412L401.724 50.412L396.488 38.784L405.804 38.784ZM397.236 28.584L421.512 28.584L421.512 25.32L430.488 25.32L430.488 28.584L454.764 28.584L454.764 36.676L429.128 36.676L422.26 45.108L426.34 46.536L432.392 38.784L442.388 38.784L433.14 50.344L439.872 50.344L443.272 64.488L410.632 64.488L410.632 56.668L417.636 56.668L420.832 52.656L411.312 49.256L411.312 41.232L414.44 42.32L418.996 36.676L397.236 36.676L397.236 28.584ZM433.888 56.668L432.596 51.092L428.108 56.668L433.888 56.668ZM447.284 38.784L456.6 38.784L451.364 50.412L441.98 50.412L447.284 38.784ZM451.364 52.588L456.6 66.324L447.42 66.324L442.184 52.588L451.364 52.588ZM486.86 32.8Q494.34 32.8 498.658 36.812Q502.976 40.824 502.976 48.236Q502.976 55.58 498.658 59.592Q494.34 63.604 486.86 63.604L475.3 63.604L475.3 80.4L464.08 80.4L464.08 32.8L486.86 32.8ZM485.84 54.628Q489.24 54.628 491.076 52.792Q492.912 50.956 492.912 48.236Q492.912 45.448 491.076 43.612Q489.24 41.776 485.84 41.776L475.3 41.776L475.3 54.628L485.84 54.628ZM520.792 80.944Q514.672 80.944 511.544 77.51Q508.416 74.076 508.416 67.412L508.416 28.108L519.296 28.108L519.296 64.692Q519.296 67.412 519.704 68.84Q520.112 70.268 521.064 71.016Q521.812 71.628 522.73 71.798Q523.648 71.968 525.96 71.968L525.96 80.944L520.792 80.944ZM555.608 80.468Q554.52 78.428 554.316 76.116Q551.8 78.36 548.298 79.822Q544.796 81.284 541.396 81.284Q536.16 81.284 533.066 78.224Q529.972 75.164 529.972 70.336L529.972 43.68L540.852 43.68L540.852 68.5Q540.852 70.472 542.178 71.73Q543.504 72.988 545.68 72.988Q547.108 72.988 549.522 71.968Q551.936 70.948 553.568 69.724L553.568 43.68L564.448 43.68L564.448 73.396Q564.448 75.64 564.72 77.17Q564.992 78.7 565.808 80.468L555.608 80.468ZM586.004 81.216Q581.856 81.42 577.606 80.57Q573.356 79.72 570.228 77.952L570.228 68.16Q573.016 70.2 576.926 71.526Q580.836 72.852 583.828 72.648Q585.936 72.512 586.888 71.73Q587.84 70.948 587.976 70.132Q588.316 68.024 586.956 66.936Q585.596 65.848 581.856 64.828Q577.708 63.672 575.26 62.142Q572.812 60.612 571.554 58.674Q570.296 56.736 570.296 53.744Q570.296 50.616 571.928 48.134Q573.56 45.652 577.096 44.224Q580.632 42.796 584.712 42.796Q587.772 42.796 590.9 43.374Q594.028 43.952 596.136 44.904L596.136 53.676Q593.96 52.588 591.002 51.738Q588.044 50.888 585.868 50.888Q581.244 50.888 580.836 53.336Q580.632 54.764 582.162 55.852Q583.692 56.94 586.548 57.824Q590.628 59.116 593.246 60.476Q595.864 61.836 597.36 64.012Q598.856 66.188 598.856 69.588Q598.856 74.62 595.252 77.782Q591.648 80.944 586.004 81.216Z"
        ></path>
      </g>
      <defs>
        <mask id="mask-20_22" maskUnits="userSpaceOnUse">
          <path
            fill="white"
            d="M42.001 58.0002C42.001 85.6144 64.3868 108 92.001 108C119.615 108 142.001 85.6144 142.001 58.0002C142.001 30.3859 119.615 8.0002 92.001 8.0002C64.3868 8.0002 42.001 30.3859 42.001 58.0002ZM46.001 58.0002C46.001 83.4052 66.5959 104 92.001 104C117.406 104 138.001 83.4052 138.001 58.0002C138.001 32.5951 117.406 12.0002 92.001 12.0002C66.5959 12.0002 46.001 32.5951 46.001 58.0002Z"
          ></path>
        </mask>
        <linearGradient
          id="linear_fill_20_31"
          x1="86.83056640625"
          y1="25.553955078125"
          x2="86.83056640625"
          y2="79.38330078125"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6A6A6A" />
          <stop offset="1" stop-color="#343333" />
        </linearGradient>
        <filter
          id="filter_20_31"
          x="60.45556640625"
          y="23.190673828125"
          width="52.75048828125"
          height="62.192626953125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_31" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_31"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_31" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_31"
            result="dropShadow_1_20_31"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_31"
            result="shape_20_31"
          />
        </filter>
        <filter
          id="filter_20_32"
          x="87.001953125"
          y="23.14013671875"
          width="26.45947265625"
          height="26.28271484375"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_32" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_32"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_32" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_32"
            result="dropShadow_1_20_32"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_32"
            result="shape_20_32"
          />
        </filter>
        <filter
          id="filter_20_34"
          x="67.640625"
          y="41.382568359375"
          width="21.1640625"
          height="10.602783203125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_34" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_34"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_34" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_34"
            result="dropShadow_1_20_34"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_34"
            result="shape_20_34"
          />
        </filter>
        <filter
          id="filter_20_35"
          x="67.640625"
          y="35.309326171875"
          width="21.1640625"
          height="10.602783203125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_35" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_35"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_35" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_35"
            result="dropShadow_1_20_35"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_35"
            result="shape_20_35"
          />
        </filter>
        <filter
          id="filter_20_36"
          x="67.640625"
          y="47.4560546875"
          width="15.8984375"
          height="10.602783203125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_36" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_36"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_36" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_36"
            result="dropShadow_1_20_36"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_36"
            result="shape_20_36"
          />
        </filter>
        <linearGradient
          id="linear_fill_20_37"
          x1="75.58984375"
          y1="72.691650390625"
          x2="75.58984375"
          y2="64.658447265625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0078D4" />
          <stop offset="0.16" stop-color="#1380DA" />
          <stop offset="0.53" stop-color="#3C91E5" />
          <stop offset="0.82" stop-color="#559CEC" />
          <stop offset="1" stop-color="#5EA0EF" />
        </linearGradient>
        <filter
          id="filter_20_37"
          x="68.51806640625"
          y="63.072998046875"
          width="14.14306640625"
          height="15.80859375"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_37" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_37"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_37" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_37"
            result="dropShadow_1_20_37"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_37"
            result="shape_20_37"
          />
        </filter>
        <linearGradient
          id="linear_fill_20_38"
          x1="86.12109375"
          y1="58.132080078125"
          x2="86.12109375"
          y2="72.88134765625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#DA3A00" />
          <stop offset="1" stop-color="#DA3A00" />
        </linearGradient>
        <filter
          id="filter_20_38"
          x="79.04931640625"
          y="56.132080078125"
          width="14.14306640625"
          height="22.749267578125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_38" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_38"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_38" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_38"
            result="dropShadow_1_20_38"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_38"
            result="shape_20_38"
          />
        </filter>
        <linearGradient
          id="linear_fill_20_39"
          x1="96.65234375"
          y1="49.935302734375"
          x2="96.65234375"
          y2="72.881591796875"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#FFE02A" />
          <stop offset="1" stop-color="#FFB518" />
        </linearGradient>
        <filter
          id="filter_20_39"
          x="89.58056640625"
          y="47.4560546875"
          width="14.14306640625"
          height="31.425537109375"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_39" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_39"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_39" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_39"
            result="dropShadow_1_20_39"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_39"
            result="shape_20_39"
          />
        </filter>
        <filter
          id="filter_20_41"
          x="52.57763671875"
          y="53.834716796875"
          width="25.19970703125"
          height="25.243408203125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_41" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_41"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_41" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_41"
            result="dropShadow_1_20_41"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_41"
            result="shape_20_41"
          />
        </filter>
        <filter
          id="filter_20_42"
          x="60.15185546875"
          y="34.061279296875"
          width="36.94140625"
          height="36.941162109375"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_42" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_42"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_42" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_42"
            result="dropShadow_1_20_42"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_42"
            result="shape_20_42"
          />
        </filter>
        <filter
          id="filter_20_43"
          x="63.1552734375"
          y="37.337646484375"
          width="30.9345703125"
          height="30.9345703125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_43" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_43"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_43" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_43"
            result="dropShadow_1_20_43"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_43"
            result="shape_20_43"
          />
        </filter>
        <filter
          id="filter_20_44"
          x="63.42822265625"
          y="42.79833984375"
          width="30.49755859375"
          height="21.10546875"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_44" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_44"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha_20_44" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_44"
            result="dropShadow_1_20_44"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_44"
            result="shape_20_44"
          />
        </filter>
        <filter
          id="filter_20_46"
          x="NaN"
          y="NaN"
          width="NaN"
          height="NaN"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="feFloodId_20_46" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha_20_46"
          />
          <feOffset dx="0" dy="2" />
          <feComposite in2="hardAlpha_20_46" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="feFloodId_20_46"
            result="dropShadow_1_20_46"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="dropShadow_1_20_46"
            result="shape_20_46"
          />
        </filter>
      </defs>
    </chakra.svg>
  );
};
