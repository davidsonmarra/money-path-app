import axios from 'axios';

const api = axios.create({
  baseURL: 'https://moneypathapi-production.up.railway.app',
  timeout: 10000,
  headers: {
    Authorization: `eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxYjUyMjFlN2E1ZGUwZTVhZjQ5N2UzNzVhNzRiMDZkODJiYTc4OGIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGF2aWRzb24gTWFycmEgUm9kcmlndWVzIFZpZWlyYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJNWtza25jVkozNVJ5aWFxbk1NcmRlWmtkRjFkQ1g3OXlhTHE2dVBORThMMlotMHdNPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21vbmV5LXBhdGgtZHAiLCJhdWQiOiJtb25leS1wYXRoLWRwIiwiYXV0aF90aW1lIjoxNzM4MDI2OTg5LCJ1c2VyX2lkIjoiVTFZWm9HRTFWSk5FcTJPOFdpSk83WXhnWW42MyIsInN1YiI6IlUxWVpvR0UxVkpORXEyTzhXaUpPN1l4Z1luNjMiLCJpYXQiOjE3MzgwMjY5ODksImV4cCI6MTczODAzMDU4OSwiZW1haWwiOiJkYXZpZHNvbi52aWVpcmFAc291cGlsYXIuY29tLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTQ4OTYzMjk2MzkxMzQ2MzQyNzYiXSwiZW1haWwiOlsiZGF2aWRzb24udmllaXJhQHNvdXBpbGFyLmNvbS5iciJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.K80hDFbF5FqABuWtlRfcvaSRintNMPiMY6unnRkXo4sCX32OQIL2JAw-7bJPYtvM7QqiMnbbVxVf0YU68EBcJ5ydA8hRChr_Hkitd1nDIDcf8uC4hmuH-03PLXG0VjLGbMLxE9XAdal51oaaiRa0MxT1_4jvuhSNQsQn22YdvBBEiF8-NqfAGCcwDlHoO5sXtYBkQJA-iK_KPAUPcOC2zSF1iLOZChpFhhq1dZKSHX_WsO-QiC0pn38vTgp801mGookgBcZt8FnQCVlol4NWN3sUWL38Vlx73h-Ts2pxU9MqO94OJss19xsZXpOoAAEgMflsfERfvtuOrzVGdYgLTg`,
  },
});

export default api;
