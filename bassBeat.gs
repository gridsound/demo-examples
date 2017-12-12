{
	"id": "e6f1421f-7cad-4d7e-9408-318b4afb8bbf",
	"bpm": 90,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "bass",
	"duration": 20,
	"patterns": {
		"i1": { "name": "Bass", "type": "keys", "keys": "i2", "synth": "i0", "duration": 4 },
		"i26": { "name": "melody", "type": "keys", "keys": "i25", "synth": "i23", "duration": 4 },
		"i35": { "name": "background tiny noise", "type": "keys", "keys": "i34", "synth": "i32", "duration": 4 },
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
				"a055062c-562f-4b93-acd4-0ca798a64158": { "type": "square", "detune": 15, "gain": 0.25, "pan": 0.83 }
			}
		},
		"i32": {
			"name": "tiny square",
			"oscillators": {
				"i33": { "order": 0, "type": "square", "detune": 5, "pan": 0.76, "gain": 0.07 },
				"a78b9f20-6278-4f2b-9277-d247e1184bd8": { "type": "square", "detune": -5, "gain": 0.06, "pan": -0.65 }
			}
		}
	},
	"tracks": {
		"i3": { "order": 0, "toggle": true, "name": "" },
		"i4": { "order": 1, "toggle": true, "name": "" },
		"i5": { "order": 2, "toggle": true, "name": "" },
		"i6": { "order": 3, "toggle": true, "name": "" },
		"i7": { "order": 4, "toggle": true, "name": "" },
		"i8": { "order": 5, "toggle": true, "name": "" },
		"i9": { "order": 6, "toggle": true, "name": "" },
		"ia": { "order": 7, "toggle": true, "name": "" },
		"ib": { "order": 8, "toggle": true, "name": "" },
		"ic": { "order": 9, "toggle": true, "name": "" },
		"id": { "order": 10, "toggle": true, "name": "" },
		"ie": { "order": 11, "toggle": true, "name": "" },
		"if": { "order": 12, "toggle": true, "name": "" },
		"i10": { "order": 13, "toggle": true, "name": "" },
		"i11": { "order": 14, "toggle": true, "name": "" },
		"i12": { "order": 15, "toggle": true, "name": "" },
		"i13": { "order": 16, "toggle": true, "name": "" },
		"i14": { "order": 17, "toggle": true, "name": "" },
		"i15": { "order": 18, "toggle": true, "name": "" },
		"i16": { "order": 19, "toggle": true, "name": "" },
		"i17": { "order": 20, "toggle": true, "name": "" }
	},
	"blocks": {
		"i21": { "pattern": "i1", "track": "ie", "when": 4, "offset": 0, "duration": 4, "selected": false },
		"i22": { "pattern": "i1", "track": "ie", "when": 8, "offset": 0, "duration": 3.5, "selected": false, "durationEdited": true },
		"i28": { "pattern": "i26", "track": "i3", "when": 4, "offset": 0, "duration": 3.75, "selected": false, "durationEdited": true },
		"i29": { "pattern": "i26", "track": "i3", "when": 8, "offset": 0, "duration": 4, "selected": false, "durationEdited": true },
		"i3e": { "pattern": "i35", "track": "i5", "when": 4, "offset": 0, "duration": 4, "selected": false },
		"i3f": { "pattern": "i35", "track": "i5", "when": 8, "offset": 0, "duration": 4, "selected": false },
		"i46": { "pattern": "i26", "track": "i3", "when": 12, "offset": 0, "duration": 3.75, "durationEdited": true, "selected": false },
		"i48": { "pattern": "i1", "track": "ie", "when": 12, "offset": 0, "duration": 4, "durationEdited": true, "selected": false },
		"i49": { "pattern": "i1", "track": "ie", "when": 16, "offset": 0, "duration": 3, "durationEdited": true, "selected": false },
		"i4a": { "pattern": "i35", "track": "i5", "when": 12, "offset": 0, "duration": 4, "selected": false },
		"i4b": { "pattern": "i35", "track": "i5", "when": 16, "offset": 0, "duration": 4, "selected": false },
		"i51": { "pattern": "i4d", "track": "i3", "when": 16, "offset": 0, "duration": 4, "selected": false },
		"i5c": { "pattern": "i26", "track": "i3", "when": 0, "offset": 0, "duration": 3.75, "durationEdited": true }
	},
	"keys": {
		"i2": {
			"i1b": { "key": "c2", "when": 0, "offset": 0, "duration": 0.75, "durationEdited": true },
			"i1c": { "key": "a1", "when": 0.75, "offset": 0, "duration": 0.75 },
			"i1d": { "key": "c#2", "when": 1.5, "offset": 0, "duration": 0.75 },
			"i1e": { "key": "a1", "when": 2.25, "offset": 0, "duration": 0.75 },
			"i1f": { "key": "c2", "when": 3, "offset": 0, "duration": 1, "durationEdited": true }
		},
		"i25": {
			"i27": { "key": "c5", "when": 0, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i2a": { "key": "a4", "when": 0.75, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i2b": { "key": "a4", "when": 2.25, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i2c": { "key": "c#5", "when": 1.5, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i2d": { "key": "c5", "when": 3, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i2e": { "key": "c5", "when": 0.5, "offset": 0, "duration": 0.25, "selected": false },
			"i2f": { "key": "a4", "when": 1.25, "offset": 0, "duration": 0.25, "selected": false },
			"i30": { "key": "c#5", "when": 2, "offset": 0, "duration": 0.25, "selected": false },
			"i40": { "key": "a4", "when": 2.75, "offset": 0, "duration": 0.25 },
			"i42": { "key": "d#5", "when": 3.5, "offset": 0, "duration": 0.25, "durationEdited": true },
			"i45": { "key": "c5", "when": 3.75, "offset": 0, "duration": 0.25 }
		},
		"i34": {
			"i36": { "key": "c6", "when": 0, "offset": 0, "duration": 0.5, "selected": false },
			"i37": { "key": "c6", "when": 1, "offset": 0, "duration": 0.25, "durationEdited": true, "selected": false },
			"i3a": { "key": "c6", "when": 3, "offset": 0, "duration": 0.75, "durationEdited": true, "selected": false },
			"i3d": { "key": "c6", "when": 2, "offset": 0, "duration": 0.5, "durationEdited": true, "selected": false }
		},
		"i4c": {
			"i4e": { "key": "c5", "when": 0, "offset": 0, "duration": 0.25 },
			"i4f": { "key": "c5", "when": 0.5, "offset": 0, "duration": 0.25 },
			"i52": { "key": "a4", "when": 0.75, "offset": 0, "duration": 0.25 },
			"i53": { "key": "a4", "when": 1.25, "offset": 0, "duration": 0.25 },
			"i54": { "key": "a4", "when": 2.25, "offset": 0, "duration": 0.25 },
			"i55": { "key": "a4", "when": 2.75, "offset": 0, "duration": 0.25 },
			"i56": { "key": "c#5", "when": 1.5, "offset": 0, "duration": 0.25 },
			"i57": { "key": "c#5", "when": 2, "offset": 0, "duration": 0.25 },
			"i58": { "key": "c5", "when": 3, "offset": 0, "duration": 0.25 },
			"i59": { "key": "d#5", "when": 3.5, "offset": 0, "duration": 0.5, "durationEdited": true }
		}
	},
	"patternOpened": "i4d",
	"synthOpened": "i23",
	"savedAt": 1513111786
}