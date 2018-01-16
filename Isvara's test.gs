{
	"id": "15815873-e1cf-49bb-a57e-b3cbf3cab4d6",
	"bpm": 120,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "/u/Isvara - test",
	"duration": 48,
	"patterns": {
		"i1": { "name": "Bass", "type": "keys", "keys": "i2", "synth": "i0", "duration": 4 },
		"i2b": { "name": "Chords", "type": "keys", "keys": "i2a", "synth": "i28", "duration": 8 },
		"i3a": { "name": "pat (2)", "type": "keys", "keys": "i39", "synth": "i37", "duration": 8 },
		"i63": { "name": "pat", "type": "keys", "keys": "i62", "synth": "i60", "duration": 4 },
		"i6b": { "name": "pat (3)", "type": "keys", "keys": "i6a", "synth": "i60", "duration": 4 },
		"i82": { "name": "pat (4)", "type": "keys", "keys": "i81", "synth": "i37", "duration": 16 }
	},
	"synths": {
		"i0": {
			"name": "synth",
			"oscillators": {
				"i18": { "order": 0, "type": "sine", "detune": -40, "pan": 0, "gain": 0.38 },
				"i19": { "order": 1, "type": "triangle", "detune": -15, "pan": -0.2, "gain": 0.75 },
				"i1a": { "order": 2, "type": "square", "detune": 15, "pan": 0.2, "gain": 0.33 }
			}
		},
		"i28": {
			"name": "synth (2)",
			"oscillators": {
				"i29": { "order": 0, "type": "sine", "detune": 20, "pan": 0, "gain": 0.43 },
				"i9d": { "order": 1, "type": "sawtooth", "detune": 0, "gain": 0.28, "pan": 0 }
			}
		},
		"i37": {
			"name": "synth (3)",
			"oscillators": {
				"i38": { "order": 0, "type": "sine", "detune": 0, "pan": 0, "gain": 1 }
			}
		},
		"i60": {
			"name": "synth (4)",
			"oscillators": {
				"i61": { "order": 0, "type": "square", "detune": 0, "pan": 0, "gain": 0.39 },
				"i9e": { "order": 1, "type": "square", "detune": -10, "gain": 0.39, "pan": -1 },
				"i9f": { "order": 2, "type": "square", "detune": 10, "gain": 0.39, "pan": 1 }
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
		"i35": { "pattern": "i2b", "track": "i3", "when": 0, "offset": 0, "duration": 8 },
		"i27": { "pattern": "i1", "track": "id", "when": 4, "offset": 0, "duration": 4 },
		"i48": { "pattern": "i1", "track": "id", "when": 12, "offset": 0, "duration": 4 },
		"i4c": { "pattern": "i1", "track": "id", "when": 20, "offset": 0, "duration": 4 },
		"i4d": { "pattern": "i1", "track": "id", "when": 28, "offset": 0, "duration": 4 },
		"i59": { "pattern": "i2b", "track": "i3", "when": 8, "offset": 0, "duration": 8 },
		"i5a": { "pattern": "i2b", "track": "i3", "when": 16, "offset": 0, "duration": 8 },
		"i5b": { "pattern": "i2b", "track": "i3", "when": 24, "offset": 0, "duration": 8 },
		"i5c": { "pattern": "i3a", "track": "ie", "when": 16, "offset": 0, "duration": 8 },
		"i5d": { "pattern": "i3a", "track": "ie", "when": 24, "offset": 0, "duration": 8 },
		"i5e": { "pattern": "i1", "track": "id", "when": 16, "offset": 0, "duration": 4 },
		"i5f": { "pattern": "i1", "track": "id", "when": 24, "offset": 0, "duration": 4 },
		"i66": { "pattern": "i63", "track": "i5", "when": 16, "offset": 0, "duration": 4 },
		"i68": { "pattern": "i63", "track": "i5", "when": 24, "offset": 0, "duration": 4 },
		"i6e": { "pattern": "i6b", "track": "i5", "when": 20, "offset": 0, "duration": 4 },
		"i6f": { "pattern": "i6b", "track": "i5", "when": 28, "offset": 0, "duration": 4 },
		"i74": { "pattern": "i2b", "track": "i3", "when": 32, "offset": 0, "duration": 8 },
		"i75": { "pattern": "i2b", "track": "i3", "when": 40, "offset": 0, "duration": 8 },
		"i76": { "pattern": "i1", "track": "id", "when": 32, "offset": 0, "duration": 4 },
		"i77": { "pattern": "i1", "track": "id", "when": 36, "offset": 0, "duration": 4 },
		"i78": { "pattern": "i1", "track": "id", "when": 40, "offset": 0, "duration": 4 },
		"i79": { "pattern": "i1", "track": "id", "when": 44, "offset": 0, "duration": 4 },
		"i7a": { "pattern": "i3a", "track": "ie", "when": 32, "offset": 0, "duration": 8 },
		"i7b": { "pattern": "i3a", "track": "ie", "when": 40, "offset": 0, "duration": 8 },
		"i7c": { "pattern": "i63", "track": "i5", "when": 32, "offset": 0, "duration": 4 },
		"i7e": { "pattern": "i63", "track": "i5", "when": 40, "offset": 0, "duration": 4 },
		"i7f": { "pattern": "i6b", "track": "i5", "when": 36, "offset": 0, "duration": 4 },
		"i80": { "pattern": "i6b", "track": "i5", "when": 44, "offset": 0, "duration": 4 },
		"i83": { "pattern": "i82", "track": "i4", "when": 32, "offset": 0, "duration": 16 }
	},
	"keys": {
		"i2": {
			"i1c": { "key": "a3", "when": 0, "offset": 0, "duration": 0.25, "durationEdited": true },
			"i1e": { "key": "a3", "when": 1, "offset": 0, "duration": 0.25 },
			"i1f": { "key": "a2", "when": 1.5, "offset": 0, "duration": 0.25 },
			"i20": { "key": "a3", "when": 2, "offset": 0, "duration": 0.25 },
			"i22": { "key": "a3", "when": 2.75, "offset": 0, "duration": 0.25 },
			"i25": { "key": "a2", "when": 3.5, "offset": 0, "duration": 0.25 },
			"i26": { "key": "a3", "when": 3.25, "offset": 0, "duration": 0.25 }
		},
		"i2a": {
			"i2c": { "key": "a3", "when": 4, "offset": 0, "duration": 4, "durationEdited": true },
			"i2d": { "key": "f3", "when": 0, "offset": 0, "duration": 2, "durationEdited": true },
			"i2e": { "key": "g3", "when": 2, "offset": 0, "duration": 2 },
			"i2f": { "key": "c4", "when": 4, "offset": 0, "duration": 4, "durationEdited": true },
			"i30": { "key": "e4", "when": 4, "offset": 0, "duration": 4 },
			"i31": { "key": "a3", "when": 0, "offset": 0, "duration": 2, "durationEdited": true },
			"i32": { "key": "c4", "when": 0, "offset": 0, "duration": 2 },
			"i33": { "key": "b3", "when": 2, "offset": 0, "duration": 2 },
			"i34": { "key": "d4", "when": 2, "offset": 0, "duration": 2 }
		},
		"i39": {
			"i3b": { "key": "f4", "when": 0, "offset": 0, "duration": 1, "durationEdited": true },
			"i3c": { "key": "c5", "when": 1, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i3d": { "key": "a4", "when": 1.5, "offset": 0, "duration": 0.5 },
			"i3e": { "key": "g4", "when": 2, "offset": 0, "duration": 1 },
			"i3f": { "key": "b4", "when": 3, "offset": 0, "duration": 1 },
			"i40": { "key": "c5", "when": 4, "offset": 0, "duration": 1 },
			"i43": { "key": "e5", "when": 5, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i45": { "key": "c5", "when": 5.5, "offset": 0, "duration": 0.5 },
			"i46": { "key": "a4", "when": 6, "offset": 0, "duration": 0.5 },
			"i47": { "key": "a4", "when": 7, "offset": 0, "duration": 0.5 }
		},
		"i62": {
			"i64": { "key": "f1", "when": 0, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i65": { "key": "f1", "when": 0.5, "offset": 0, "duration": 0.5 }
		},
		"i6a": {
			"i6c": { "key": "a1", "when": 0, "offset": 0, "duration": 0.5 },
			"i6d": { "key": "a1", "when": 0.5, "offset": 0, "duration": 0.5 }
		},
		"i81": {
			"i85": { "key": "c6", "when": 0, "offset": 0, "duration": 1, "durationEdited": true },
			"i86": { "key": "c6", "when": 1, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i87": { "key": "b5", "when": 1.5, "offset": 0, "duration": 0.5 },
			"i88": { "key": "c6", "when": 2, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i89": { "key": "b5", "when": 2.5, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i8b": { "key": "b5", "when": 3.5, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i8c": { "key": "c6", "when": 4, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i8d": { "key": "e6", "when": 4.5, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i8e": { "key": "a5", "when": 5.5, "offset": 0, "duration": 1, "durationEdited": true },
			"i8f": { "key": "c6", "when": 8, "offset": 0, "duration": 1 },
			"i90": { "key": "c6", "when": 9, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i91": { "key": "b5", "when": 9.5, "offset": 0, "duration": 0.5 },
			"i93": { "key": "c6", "when": 10, "offset": 0, "duration": 0.5 },
			"i94": { "key": "b5", "when": 10.5, "offset": 0, "duration": 0.5 },
			"i95": { "key": "e6", "when": 11.5, "offset": 0, "duration": 1.5, "durationEdited": true },
			"i97": { "key": "a5", "when": 11.5, "offset": 0, "duration": 1.5 },
			"i98": { "key": "e6", "when": 8, "offset": 0, "duration": 1, "durationEdited": true },
			"i99": { "key": "e6", "when": 9, "offset": 0, "duration": 0.5, "durationEdited": true },
			"i9a": { "key": "d6", "when": 9.5, "offset": 0, "duration": 0.5 },
			"i9b": { "key": "e6", "when": 10, "offset": 0, "duration": 0.5 },
			"i9c": { "key": "g6", "when": 10.5, "offset": 0, "duration": 0.5 }
		}
	},
	"synthOpened": "i28",
	"savedAt": 1516124140,
	"patternOpened": "i2b"
}
