import { axiosInterceptor } from "./axiosInterceptors";

const url = process.env.BASE_API;

// export const getAllCounseling = (callback) => {
//   axiosInterceptor
//     .get(`${url}/counseling`)
//     .then((res) => {
//       callback(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


export const getAllCounseling = (doctorId, callback) => {
  axiosInterceptor
    .get(`${url}/counseling`)
    .then((res) => {
      // Filter the data based on the doctor's ID
      const filteredData = res.data.data.filter(
        (counseling) => counseling.user_id === doctorId
      );

      // Count the occurrences for chat and video call services
      const chatCount = filteredData.filter(
        (counseling) => counseling.service_type === "chat"
      ).length;

      const videoCallCount = filteredData.filter(
        (counseling) => counseling.service_type === "video_call"
      ).length;

      // Count the total number of patients
      const totalPasienCount = filteredData.length;

      // Pass the counts to the callback function
      callback(totalPasienCount, chatCount, videoCallCount);
    })
    .catch((err) => {
      console.log(err);
    });
};
