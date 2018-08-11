{
	"id": "56ed47b2-a9d6-4d45-892a-e397c3116996",
	"bpm": 90,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "Still D.R.E.",
	"duration": 12,
	"patterns": {
		"i1": { "name": "piano", "type": "keys", "keys": "i2", "synth": "i0", "duration": 8 },
		"i1f": { "name": "bass", "type": "keys", "keys": "i1e", "synth": "i1b", "duration": 8 }
	},
	"synths": {
		"i0": {
			"name": "piano",
			"oscillators": {
				"i18": { "order": 0, "type": "triangle", "detune": 0, "pan": -0.3, "gain": 0.46 },
				"i19": { "type": "bass4", "gain": 0.36, "pan": 0.1, "detune": 0, "order": 1 }
			}
		},
		"i1b": {
			"name": "bass",
			"oscillators": {
				"i1c": { "order": 0, "type": "bass3", "detune": 0, "pan": 0, "gain": 0.89 },
				"i1d": { "type": "brass2", "gain": 0.47, "pan": 0, "detune": 0, "order": 1 }
			}
		}
	},
	"tracks": {
		"i3": { "order": 0 },
		"i4": { "order": 1, "name": "piano" },
		"i5": { "order": 2, "name": "bass" },
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
		"0": { "pattern": "i1f", "duration": 1.5, "durationEdited": true, "offset": 6.5, "when": 2.5, "track": "i5" },
		"1": { "pattern": "i1", "duration": 8, "when": 4, "track": "i4" },
		"2": { "pattern": "i1f", "duration": 8, "when": 4, "track": "i5" }
	},
	"keys": {
		"i2": {
			"0": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0 },
			"1": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0 },
			"2": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0 },
			"3": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0.5 },
			"4": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0.5 },
			"5": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 0.5 },
			"6": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1 },
			"7": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1 },
			"8": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1 },
			"9": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.5 },
			"10": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.5 },
			"11": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.5 },
			"12": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2 },
			"13": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2 },
			"14": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2 },
			"15": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.5 },
			"16": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.5 },
			"17": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.5 },
			"18": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3 },
			"19": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3 },
			"20": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3 },
			"21": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3.5 },
			"22": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3.5 },
			"23": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3.5 },
			"24": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4 },
			"25": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4 },
			"26": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4 },
			"27": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4.5 },
			"28": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4.5 },
			"29": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 4.5 },
			"30": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5 },
			"31": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5 },
			"32": { "key": 57, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5 },
			"33": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5.5 },
			"34": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5.5 },
			"35": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 5.5 },
			"36": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6 },
			"37": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6 },
			"38": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6 },
			"39": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6.5 },
			"40": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6.5 },
			"41": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 6.5 },
			"42": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7 },
			"43": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7 },
			"44": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7 },
			"45": { "key": 52, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7.5 },
			"46": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7.5 },
			"47": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 7.5 }
		},
		"i1e": {
			"0": { "key": 33, "pan": 0, "gain": 0.82, "duration": 1, "when": 0 },
			"1": { "key": 21, "pan": 0, "gain": 0.77, "duration": 1, "when": 0 },
			"2": { "key": 35, "pan": 0, "gain": 0.76, "duration": 1.0625, "when": 2.96875 },
			"3": { "key": 23, "pan": 0, "gain": 0.77, "duration": 1, "when": 3 },
			"4": { "key": 28, "pan": 0, "gain": 0.77, "duration": 1, "when": 4 },
			"5": { "key": 16, "pan": 0, "gain": 0.77, "duration": 1, "when": 4 },
			"6": { "key": 28, "pan": 0, "gain": 0.79, "duration": 1.03125, "when": 6.96875 },
			"7": { "key": 16, "pan": 0, "gain": 0.77, "duration": 1, "when": 7 }
		}
	},
	"synthOpened": "i1b",
	"savedAt": 1534026524,
	"loopA": 4,
	"loopB": 12,
	"patternOpened": "i1f"
}
