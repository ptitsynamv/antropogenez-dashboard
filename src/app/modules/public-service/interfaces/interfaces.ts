export interface PublicServiceWaterI extends NewPublicServiceWaterI {
  id: string;
  date: string;
}

export interface NewPublicServiceWaterI {
  data: WaterFormI;
}

export interface WaterFormI {
  address?: string;
  hot1: string;
  hot1CounterName: string;
  hot2: string;
  hot2CounterName: string;
  cold1: string;
  cold1CounterName: string;
  cold2: string;
  cold2CounterName: string;
}
