{
	"id": "fcb4c1fb-8c1c-49f7-a8c7-cd0b3819461e",
	"bpm": 150,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "key.gain/pan (test)",
	"duration": 16,
	"patterns": {
		"i1": { "name": "pat", "type": "keys", "keys": "i2", "synth": "i0", "duration": 4 }
	},
	"synths": {
		"i0": {
			"name": "synth",
			"oscillators": {
				"i18": { "order": 0, "type": "triangle", "detune": 20, "pan": 0, "gain": 0.58 },
				"i19": { "type": "square", "gain": 0.12, "pan": 0, "detune": -20, "order": 1 }
			}
		}
	},
	"tracks": {
		"i3": { "order": 0 },
		"i4": { "order": 1 },
		"i5": { "order": 2 },
		"i6": { "order": 3 },
		"i7": { "order": 4 },
		"i8": { "order": 5 },
		"i9": { "order": 6 },
		"ia": { "order": 7 },
		"ib": { "order": 8 },
		"ic": { "order": 9 },
		"id": { "order": 10 },
		"ie": { "order": 11 },
		"if": { "order": 12 },
		"i10": { "order": 13 },
		"i11": { "order": 14 },
		"i12": { "order": 15 },
		"i13": { "order": 16 },
		"i14": { "order": 17 },
		"i15": { "order": 18 },
		"i16": { "order": 19 },
		"i17": { "order": 20 }
	},
	"blocks": {
		"0": { "pattern": "i1", "duration": 4, "when": 0, "track": "i4" },
		"1": { "pattern": "i1", "duration": 4, "when": 4, "track": "i4" },
		"2": { "pattern": "i1", "duration": 4, "when": 8, "track": "i4" },
		"3": { "pattern": "i1", "duration": 4, "when": 12, "track": "i4" }
	},
	"keys": {
		"i2": {
			"0": { "key": 60, "pan": 0.24, "gain": 0.96, "duration": 0.125, "when": 0 },
			"1": { "key": 60, "pan": 0.8, "gain": 0.75, "duration": 0.125, "when": 0.25 },
			"2": { "key": 60, "pan": 0.96, "gain": 0.46, "duration": 0.125, "when": 0.5 },
			"3": { "key": 60, "pan": 0.47, "gain": 0.26, "duration": 0.125, "when": 0.75 },
			"4": { "key": 60, "pan": -0.39, "gain": 0.98, "duration": 0.125, "when": 1 },
			"5": { "key": 60, "pan": -0.84, "gain": 0.79, "duration": 0.125, "when": 1.25 },
			"6": { "key": 60, "pan": -0.92, "gain": 0.47, "duration": 0.125, "when": 1.5 },
			"7": { "key": 60, "pan": -0.65, "gain": 0.19, "duration": 0.125, "when": 1.75 },
			"8": { "key": 60, "pan": 0.2, "gain": 0.97, "duration": 0.125, "when": 2 },
			"9": { "key": 60, "pan": 0.8, "gain": 0.8, "duration": 0.125, "when": 2.25 },
			"10": { "key": 60, "pan": 0.96, "gain": 0.44, "duration": 0.125, "when": 2.5 },
			"11": { "key": 60, "pan": 0.61, "gain": 0.15, "duration": 0.125, "when": 2.75 },
			"12": { "key": 60, "pan": -0.22, "gain": 0.98, "duration": 0.125, "when": 3 },
			"13": { "key": 60, "pan": -0.73, "gain": 0.77, "duration": 0.125, "when": 3.25 },
			"14": { "key": 60, "pan": -0.88, "gain": 0.45, "duration": 0.125, "when": 3.5 },
			"15": { "key": 60, "pan": -0.43, "gain": 0.14, "duration": 0.125, "when": 3.75 }
		}
	},
	"synthOpened": "i0",
	"patternOpened": "i1",
	"savedAt": 1532906842
}