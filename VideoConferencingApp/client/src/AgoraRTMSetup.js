import { createClient } from 'agora-rtm-react';

const appId = "06991702035842f79e4e3140ac867d61";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);