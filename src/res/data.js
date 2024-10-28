const courses=[
    {
        id: 1, title: 'Front-end', description: 'front end course', hours: 50,
        image: 'https://u.openlearning.com/T9NUVVLixCutD3KbHSpM8DyhtveZMJ7F49ZDdrs8vspJphYNonL56fiFcTVr3DEi.1720070212/AdobeStock_286707266.jpg?se=2024-10-16T14%3A05%3A55Z&sp=r&sv=2022-11-02&sr=b&sig=/TfpcbFPUR2zuaqrm1dxyuNIFm8TiuQ877m0JZ2T0ps%3D',
        modules: ["modules 1", 'module 2', 'module 3', 'module 4']
    },
    {
        id: 2, title: 'Back-end', description: 'Back end course', hours: 60,
        image: 'https://u.openlearning.com/3TdFqkPgZP9GqxaxjWLQQJMQqKBAV9dciZn8YXzGrkx44fuA2YRZgZWXuGznGeKk.1680501667/IATD-Offensive-Security.jpg?se=2024-10-16T14%3A06%3A28Z&sp=r&sv=2022-11-02&sr=b&sig=jqPJhUmv3MTLCQ9U3x0zkcAtSUWNqt5Gq96ShXz%2BpWE%3D',
        modules: ["modules 1", 'module 2', 'module 3', 'module 4', 'module 5']
    },
    {
        id: 3, title: 'Cloud computing', description: 'Cloud basics', hours: 40,
        image: 'https://u.openlearning.com/5Sv87pq2k7ATqNSHQBBjPDdz72ZSsGvFLYxKgMgeZna5P6G2eMCD7YsZJyx6ketA.1672982755/IATD-Cloud-Computing-a.jpg?se=2024-10-16T14%3A06%3A53Z&sp=r&sv=2022-11-02&sr=b&sig=tY78jrTMiFf0HSJ9Rch4096ZVdt64I1ipL/wMKmYcQQ%3D',
        modules: ["modules 1", 'module 2', 'module 3']
    },
    {
        id: 4, title: 'Web Designing', description: 'front end course', hours: 50,
        image: 'https://openlearning-cdn.s3.amazonaws.com/course__iat_courses_softwareprogramminganddatamodelling__course-promo-image-1694564997.5052235.jpg',
        modules: ["modules 1", 'module 2', 'module 3']
    },
    {
        id: 5, title: 'Machine learning', description: 'Introduction to machine learning', hours: 150,
        image: 'https://openlearning-cdn.s3.amazonaws.com/course__iat_courses_deeplearningmicrocredential__course-promo-image-1670212927.725473.jpg',
        modules: ["modules 1", 'module 2', 'module 3', 'module 4', 'module 5', 'module 6', 'module 7', 'module 8', 'module 9', 'module 10', 'module 11', 'module 12']
    },
    {
        id: 6, title: 'Data analytics', description: 'Data analysis', hours: 40,
        image: 'https://openlearning-cdn.s3.amazonaws.com/course__iat_courses_impactofaionsociety__course-promo-image-1684738540.0085847.jpg',
        modules: ["modules 1", 'module 2', 'module 3', 'module 4', 'module 5']
    }
];

const ServerURL = 'http://localhost:3000';

export default courses;
export {ServerURL};