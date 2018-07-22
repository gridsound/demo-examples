{
	"id": "e6f1421f-7cad-4d7e-9408-318b4afb8bbf",
	"bpm": 90,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "bassBeat",
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
		"i21": { "pattern": "i1", "track": "i4", "when": 4, "duration": 4 },
		"i22": { "pattern": "i1", "track": "i4", "when": 8, "duration": 3.5, "durationEdited": true },
		"i28": { "pattern": "i26", "track": "i3", "when": 4, "duration": 3.75, "durationEdited": true },
		"i29": { "pattern": "i26", "track": "i3", "when": 8, "duration": 4, "durationEdited": true },
		"i3e": { "pattern": "i35", "track": "i5", "when": 4, "duration": 4 },
		"i3f": { "pattern": "i35", "track": "i5", "when": 8, "duration": 4 },
		"i46": { "pattern": "i26", "track": "i3", "when": 12, "duration": 3.75, "durationEdited": true },
		"i48": { "pattern": "i1", "track": "i4", "when": 12, "duration": 4, "durationEdited": true },
		"i49": { "pattern": "i1", "track": "i4", "when": 16, "duration": 3, "durationEdited": true },
		"i4a": { "pattern": "i35", "track": "i5", "when": 12, "duration": 4 },
		"i4b": { "pattern": "i35", "track": "i5", "when": 16, "duration": 4 },
		"i51": { "pattern": "i4d", "track": "i3", "when": 16, "duration": 4 },
		"i5c": { "pattern": "i26", "track": "i3", "when": 0, "duration": 3.75, "durationEdited": true }
	},
	"keys": {
		"i2": {
			"i1b": { "key": 24, "when": 0, "duration": 0.75 },
			"i1c": { "key": 21, "when": 0.75, "duration": 0.75 },
			"i1d": { "key": 25, "when": 1.5, "duration": 0.75 },
			"i1e": { "key": 21, "when": 2.25, "duration": 0.75 },
			"i1f": { "key": 24, "when": 3, "duration": 1 }
		},
		"i25": {
			"i27": { "key": 60, "when": 0, "duration": 0.25 },
			"i2a": { "key": 57, "when": 0.75, "duration": 0.25 },
			"i2b": { "key": 57, "when": 2.25, "duration": 0.25 },
			"i2c": { "key": 61, "when": 1.5, "duration": 0.25 },
			"i2d": { "key": 60, "when": 3, "duration": 0.25 },
			"i2e": { "key": 60, "when": 0.5, "duration": 0.25 },
			"i2f": { "key": 57, "when": 1.25, "duration": 0.25 },
			"i30": { "key": 61, "when": 2, "duration": 0.25 },
			"i40": { "key": 57, "when": 2.75, "duration": 0.25 },
			"i42": { "key": 63, "when": 3.5, "duration": 0.25 },
			"i45": { "key": 60, "when": 3.75, "duration": 0.25 }
		},
		"i34": {
			"i36": { "key": 72, "when": 0, "duration": 0.5 },
			"i37": { "key": 72, "when": 1, "duration": 0.25 },
			"i3a": { "key": 72, "when": 3, "duration": 0.75 },
			"i3d": { "key": 72, "when": 2, "duration": 0.5 }
		},
		"i4c": {
			"i4e": { "key": 60, "when": 0, "duration": 0.25 },
			"i4f": { "key": 60, "when": 0.5, "duration": 0.25 },
			"i52": { "key": 57, "when": 0.75, "duration": 0.25 },
			"i53": { "key": 57, "when": 1.25, "duration": 0.25 },
			"i54": { "key": 57, "when": 2.25, "duration": 0.25 },
			"i55": { "key": 57, "when": 2.75, "duration": 0.25 },
			"i56": { "key": 61, "when": 1.5, "duration": 0.25 },
			"i57": { "key": 61, "when": 2, "duration": 0.25 },
			"i58": { "key": 60, "when": 3, "duration": 0.25 },
			"i59": { "key": 63, "when": 3.5, "duration": 0.5 }
		}
	},
	"patternOpened": "i4d",
	"synthOpened": "i23",
	"savedAt": 1532291816
}
