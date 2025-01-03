type Statistics = {
    cpuUsage: number;
    ramUsage: number;
    storageUsage: number;
  };
  
  type StaticData = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
};

type View = 'CPU' | 'RAM' | 'STORAGE';


type EventPayloadMapping = {
    statistics: Statistics;
    getStaticData: StaticData;
    changeView: View;
  };

interface Window {
    electron: {
      subscribeStatistics: (
        callback: (statistics: Statistics) => void
      ) => void;
      getStaticData: () => Promise<StaticData>;
      subscribeChangeView: (
        callback: (view: View) => void
      ) => UnsubscribeFunction;
    };
  }