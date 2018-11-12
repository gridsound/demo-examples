{
	"id": "e6f1421f-7cad-4d7e-9408-318b4afb8bbf",
	"bpm": 90,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "bassBeat",
	"duration": 20,
	"patterns": {
		"1": { "name": "bass cut", "type": "keys", "keys": "1", "synth": "i0", "duration": 4 },
		"i1": { "name": "bass", "type": "keys", "keys": "i2", "synth": "i0", "duration": 4 },
		"i26": { "name": "melody", "type": "keys", "keys": "i25", "synth": "i23", "duration": 4 },
		"i35": { "name": "tiny noise", "type": "keys", "keys": "i34", "synth": "i32", "duration": 4 },
		"i4d": { "name": "melody__", "type": "keys", "keys": "i4c", "synth": "i23", "duration": 4 }
	},
	"synths": {
		"i0": {
			"name": "synth for bass",
			"oscillators": {
				"i18": { "order": 0, "type": "sine", "detune": 0, "pan": 0, "gain": 1 },
				"i19": { "order": 1, "type": "triangle", "detune": -15, "pan": -0.2, "gain": 0.75 },
				"i1a": { "order": 2, "type": "square", "detune": 15, "pan": 0.2, "gain": 0.31 }
			}
		},
		"i23": {
			"name": "main",
			"oscillators": {
				"i24": { "order": 0, "type": "triangle", "detune": -15, "pan": -0.6, "gain": 0.52 },
				"i5d": { "order": 1, "type": "square", "detune": 15, "gain": 0.25, "pan": 0.83 }
			}
		},
		"i32": {
			"name": "tiny square",
			"oscillators": {
				"i33": { "order": 0, "type": "square", "detune": 5, "pan": 0.76, "gain": 0.07 },
				"i5e": { "order": 1, "type": "square", "detune": -5, "gain": 0.06, "pan": -0.65 }
			}
		}
	},
	"tracks": {
		"i3": { "order": 0 },
		"i4": { "order": 1 },
		"i5": { "order": 2, "toggle": false },
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
		"0": { "pattern": "i26", "track": "i3", "when": 0, "duration": 3.75, "durationEdited": true },
		"1": { "pattern": "i35", "track": "i6", "when": 4, "duration": 4 },
		"2": { "pattern": "i1", "track": "i4", "when": 4, "duration": 4 },
		"3": { "pattern": "i26", "track": "i3", "when": 4, "duration": 3.75, "durationEdited": true },
		"4": { "pattern": "i26", "track": "i3", "when": 8, "duration": 4, "durationEdited": true },
		"5": { "pattern": "i35", "track": "i6", "when": 8, "duration": 4 },
		"6": { "pattern": "i1", "track": "i4", "when": 8, "duration": 3.5, "durationEdited": true },
		"7": { "pattern": "i1", "track": "i4", "when": 12, "duration": 4, "durationEdited": true },
		"8": { "pattern": "i35", "track": "i6", "when": 12, "duration": 4 },
		"9": { "pattern": "i26", "track": "i3", "when": 12, "duration": 3.75, "durationEdited": true },
		"10": { "pattern": "i1", "track": "i4", "when": 16, "duration": 3.125, "durationEdited": true },
		"11": { "pattern": "i35", "track": "i6", "when": 16, "duration": 4 },
		"12": { "pattern": "i4d", "track": "i3", "when": 16, "duration": 4 },
		"13": { "pattern": "1", "duration": 4, "when": 4, "track": "i5" },
		"14": { "pattern": "1", "duration": 3.5, "durationEdited": true, "when": 8, "track": "i5" },
		"15": { "pattern": "1", "duration": 4, "when": 12, "track": "i5" },
		"16": { "pattern": "1", "duration": 3.125, "durationEdited": true, "when": 16, "track": "i5" }
	},
	"keys": {
		"1": {
			"0": { "key": 24, "when": 0, "duration": 0.75, "pan": 0, "gain": 0.8 },
			"1": { "key": 21, "when": 0.75, "duration": 0.75, "pan": 0, "gain": 0.8 },
			"2": { "key": 25, "when": 1.5, "duration": 0.75, "pan": 0, "gain": 0.8 },
			"3": { "key": 21, "when": 2.25, "duration": 0.75, "pan": 0, "gain": 0.8 },
			"4": { "key": 24, "when": 3, "duration": 1, "pan": 0, "gain": 0.8 }
		},
		"i2": {
			"0": { "key": 24, "when": 0, "duration": 0.6875, "pan": 0, "gain": 0.8, "next": 1 },
			"1": { "key": 21, "when": 0.75, "duration": 0.6875, "pan": 0, "gain": 0.8, "prev": 0, "next": 2 },
			"2": { "key": 25, "when": 1.5, "duration": 0.6875, "pan": 0, "gain": 0.8, "prev": 1, "next": 3 },
			"3": { "key": 21, "when": 2.25, "duration": 0.6875, "pan": 0, "gain": 0.8, "prev": 2, "next": 4 },
			"4": { "key": 24, "when": 3, "duration": 1, "pan": 0, "gain": 0.8, "prev": 3 }
		},
		"i25": {
			"0": { "key": 60, "when": 0, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"1": { "key": 60, "when": 0.5, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"2": { "key": 57, "when": 0.75, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"3": { "key": 57, "when": 1.25, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"4": { "key": 61, "when": 1.5, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"5": { "key": 61, "when": 2, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"6": { "key": 57, "when": 2.25, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"7": { "key": 57, "when": 2.75, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"8": { "key": 60, "when": 3, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"9": { "key": 63, "when": 3.5, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"10": { "key": 60, "when": 3.75, "duration": 0.25, "pan": 0, "gain": 0.8 }
		},
		"i34": {
			"0": { "key": 72, "when": 0, "duration": 0.5, "pan": 0, "gain": 0.8 },
			"1": { "key": 72, "when": 1, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"2": { "key": 72, "when": 2, "duration": 0.5, "pan": 0, "gain": 0.8 },
			"3": { "key": 72, "when": 3, "duration": 0.75, "pan": 0, "gain": 0.8 }
		},
		"i4c": {
			"0": { "key": 60, "when": 0, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"1": { "key": 60, "when": 0.5, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"2": { "key": 57, "when": 0.75, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"4": { "key": 57, "when": 1.25, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"6": { "key": 61, "when": 1.5, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"7": { "key": 61, "when": 2, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"8": { "key": 57, "when": 2.25, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"9": { "key": 57, "when": 2.75, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"10": { "key": 60, "when": 3, "duration": 0.25, "pan": 0, "gain": 0.8 },
			"11": { "key": 63, "when": 3.5, "duration": 0.5, "pan": 0, "gain": 0.8 }
		}
	},
	"patternOpened": "i35",
	"synthOpened": "i32",
	"savedAt": 1541988540,
	"loopA": 4,
	"loopB": 20
}
