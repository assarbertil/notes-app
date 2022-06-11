import { styled } from "../stitches.config"

const Svg = styled("svg", {
  width: "24px",
  height: "24px",
})

export const CrossIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
)

export const EditIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Svg>
)

export const CheckIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </Svg>
)

export const DeleteIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </Svg>
)

export const BoldIcon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M15.714 12.07A3.745 3.745 0 0013.25 5.5H6.5V19H13a3.994 3.994 0 002.714-6.93zM8.5 7.5h4.75a1.75 1.75 0 010 3.5H8.5V7.5zM13 17H8.5v-4H13a2 2 0 010 4z"
      fill="currentColor"
    />
  </Svg>
)

export const StrikeThroughIcon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M18 11.5h-6c-1.368 0-3-.39-3-2.25C9 7.788 10.546 7 12 7c1.384 0 3 .524 3 2h1.5c0-2.093-1.809-3.5-4.5-3.5-2.566 0-4.5 1.612-4.5 3.75-.02.812.238 1.606.732 2.25H6V13h6c1.368 0 3 .39 3 2.25 0 1.24-1.345 2.25-3 2.25-1.384 0-3-.523-3-2H7.5c0 2.093 1.809 3.5 4.5 3.5 2.524 0 4.5-1.647 4.5-3.75a3.546 3.546 0 00-.732-2.25H18v-1.5z"
      fill="currentColor"
    />
  </Svg>
)

export const Header1Icon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M18.878 17.74v-5.16H17.8c-.108.694-.432 1.027-1.297 1.081v1.017h1.053v3.061h-1.523V19h4.294v-1.26h-1.449zM13 11.5H5.5v-6H4V19h1.5v-6H13v6h1.5V5.5H13v6z"
      fill="currentColor"
    />
  </Svg>
)
export const Header2Icon = () => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M18.7 16.669c1.431-.424 2.476-.928 2.476-2.197 0-1.162-.838-2.017-2.719-2.017-2 0-3.016.864-3.016 2.404v.162h1.342v-.126c0-.855.55-1.323 1.647-1.323.954 0 1.405.324 1.405.936 0 .65-.793.918-1.89 1.25-1.35.405-2.594.864-2.594 2.305V19h5.78v-1.198h-4.285c.054-.549.72-.791 1.854-1.133zM12 11.5H4.5v-6H3V19h1.5v-6H12v6h1.5V5.5H12v6z"
      fill="currentColor"
    />
  </Svg>
)

export const BulletListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M20 16.5H9.5V18H20v-1.5zm0-5.5H9.5v1.5H20V11zm0-5.5H9.5V7H20V5.5zm-14.25-1A1.625 1.625 0 004 6.25 1.625 1.625 0 005.75 8 1.625 1.625 0 007.5 6.25 1.625 1.625 0 005.75 4.5zm0 5.5A1.625 1.625 0 004 11.75a1.625 1.625 0 001.75 1.75 1.626 1.626 0 001.75-1.75A1.625 1.625 0 005.75 10zm0 5.5A1.624 1.624 0 004 17.25 1.625 1.625 0 005.75 19a1.626 1.626 0 001.75-1.75 1.625 1.625 0 00-1.75-1.75z"
      fill="currentColor"
    />
  </svg>
)

export const OrderedListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
    <path
      d="M4.497 7.5v1H7v-1h-.723v-3h-.832a.926.926 0 01-.272.463.912.912 0 01-.508.19v.742h.6V7.5h-.768zm2.461 9.436a.771.771 0 00.404-.307.972.972 0 00.133-.533.958.958 0 00-.386-.795 1.81 1.81 0 00-1.13-.3 1.808 1.808 0 00-1.188.341 1.17 1.17 0 00-.409.95v.208h.99v-.167a.45.45 0 01.143-.346.6.6 0 01.421-.133.644.644 0 01.417.111.364.364 0 01.131.294.326.326 0 01-.117.274.634.634 0 01-.383.091h-.35v.704h.35a.874.874 0 01.404.073.285.285 0 01.135.276.378.378 0 01-.15.313.723.723 0 01-.45.118.662.662 0 01-.447-.122.471.471 0 01-.135-.367V17.5H4.335v.172a1.28 1.28 0 00.365.994c.355.256.79.375 1.227.334a1.95 1.95 0 001.223-.328 1.051 1.051 0 00.417-.866.91.91 0 00-.164-.58.887.887 0 00-.444-.29zM20 16.5H9.5V18H20v-1.5zm0-5.5H9.5v1.5H20V11zm0-5.5H9.5V7H20V5.5zM4.5 11.75A1.16 1.16 0 005.75 13 1.16 1.16 0 007 11.75a1.16 1.16 0 00-1.25-1.25 1.161 1.161 0 00-1.25 1.25z"
      fill="currentColor"
    />
  </svg>
)
