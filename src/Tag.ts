import { Reflection } from '@kezziny/reflection';
import { Device } from '@kezziny/smart-hut';

interface ITags {
	[key: string]: string;
}

export class Tag {
	public static readonly ApplyKey = "Tag";

	public static Apply(args: ITags) {
		return function (device: Device, property: string) {
			Reflection.SetPropertyMetadata(device, property, Tag.ApplyKey, args);
		}
	}
}
