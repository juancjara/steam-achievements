declare module 'steamapi' {
  interface UserSummary {
    avatar: object;
    steamId: string;
    url: string;
    created: number;
    lastLogOff: number;
    nickname: string;
    realName: string | undefined;
    primaryGroupID: string;
    personaState: number;
    personaStateFlags: number;
    commentPermission: number;
    visibilityState: number;
    countryCode: string;
    stateCode: string;
    cityID: number;
    gameServerIP: number | undefined;
    gameServerSteamID: number | undefined;
    gameExtraInfo: number | undefined;
    gameID: number | undefined;
  }

  class SteamAPI {
    public constructor(key: string);

    public getUserSummary(userId: string): Promise<UserSummary>;
  }

  export = SteamAPI;
}
