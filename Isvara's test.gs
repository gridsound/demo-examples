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
				"ia0": { "order": 1, "type": "sawtooth", "detune": 0, "gain": 0.28, "pan": 0 }
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
				"ia1": { "order": 1, "type": "square", "detune": -10, "gain": 0.39, "pan": -1 },
				"ia2": { "order": 2, "type": "square", "detune": 10, "gain": 0.39, "pan": 1 }
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
		"i35": { "pattern": "i2b", "track": "i3", "when": 0, "duration": 8 },
		"i27": { "pattern": "i1", "track": "i4", "when": 4, "duration": 4 },
		"i48": { "pattern": "i1", "track": "i4", "when": 12, "duration": 4 },
		"i4c": { "pattern": "i1", "track": "i4", "when": 20, "duration": 4 },
		"i4d": { "pattern": "i1", "track": "i4", "when": 28, "duration": 4 },
		"i59": { "pattern": "i2b", "track": "i3", "when": 8, "duration": 8 },
		"i5a": { "pattern": "i2b", "track": "i3", "when": 16, "duration": 8 },
		"i5b": { "pattern": "i2b", "track": "i3", "when": 24, "duration": 8 },
		"i5c": { "pattern": "i3a", "track": "i5", "when": 16, "duration": 8 },
		"i5d": { "pattern": "i3a", "track": "i5", "when": 24, "duration": 8 },
		"i5e": { "pattern": "i1", "track": "i4", "when": 16, "duration": 4 },
		"i5f": { "pattern": "i1", "track": "i4", "when": 24, "duration": 4 },
		"i66": { "pattern": "i63", "track": "i6", "when": 16, "duration": 4 },
		"i68": { "pattern": "i63", "track": "i6", "when": 24, "duration": 4 },
		"i6e": { "pattern": "i6b", "track": "i6", "when": 20, "duration": 4 },
		"i6f": { "pattern": "i6b", "track": "i6", "when": 28, "duration": 4 },
		"i74": { "pattern": "i2b", "track": "i3", "when": 32, "duration": 8 },
		"i75": { "pattern": "i2b", "track": "i3", "when": 40, "duration": 8 },
		"i76": { "pattern": "i1", "track": "i4", "when": 32, "duration": 4 },
		"i77": { "pattern": "i1", "track": "i4", "when": 36, "duration": 4 },
		"i78": { "pattern": "i1", "track": "i4", "when": 40, "duration": 4 },
		"i79": { "pattern": "i1", "track": "i4", "when": 44, "duration": 4 },
		"i7a": { "pattern": "i3a", "track": "i5", "when": 32, "duration": 8 },
		"i7b": { "pattern": "i3a", "track": "i5", "when": 40, "duration": 8 },
		"i7c": { "pattern": "i63", "track": "i6", "when": 32, "duration": 4 },
		"i7e": { "pattern": "i63", "track": "i6", "when": 40, "duration": 4 },
		"i7f": { "pattern": "i6b", "track": "i6", "when": 36, "duration": 4 },
		"i80": { "pattern": "i6b", "track": "i6", "when": 44, "duration": 4 },
		"i83": { "pattern": "i82", "track": "i7", "when": 32, "duration": 16 }
	},
	"keys": {
		"i2": {
			"i1c": { "key": 45, "when": 0, "duration": 0.25 },
			"i1e": { "key": 45, "when": 1, "duration": 0.25 },
			"i1f": { "key": 33, "when": 1.5, "duration": 0.25 },
			"i20": { "key": 45, "when": 2, "duration": 0.25 },
			"i22": { "key": 45, "when": 2.75, "duration": 0.25 },
			"i25": { "key": 33, "when": 3.5, "duration": 0.25 },
			"i26": { "key": 45, "when": 3.25, "duration": 0.25 }
		},
		"i2a": {
			"i2c": { "key": 45, "when": 4, "duration": 4 },
			"i2d": { "key": 41, "when": 0, "duration": 2 },
			"i2e": { "key": 43, "when": 2, "duration": 2 },
			"i2f": { "key": 48, "when": 4, "duration": 4 },
			"i30": { "key": 52, "when": 4, "duration": 4 },
			"i31": { "key": 45, "when": 0, "duration": 2 },
			"i32": { "key": 48, "when": 0, "duration": 2 },
			"i33": { "key": 47, "when": 2, "duration": 2 },
			"i34": { "key": 50, "when": 2, "duration": 2 }
		},
		"i39": {
			"i3b": { "key": 53, "when": 0, "duration": 1 },
			"i3c": { "key": 60, "when": 1, "duration": 0.5 },
			"i3d": { "key": 57, "when": 1.5, "duration": 0.5 },
			"i3e": { "key": 55, "when": 2, "duration": 1 },
			"i3f": { "key": 59, "when": 3, "duration": 1 },
			"i40": { "key": 60, "when": 4, "duration": 1 },
			"i43": { "key": 64, "when": 5, "duration": 0.5 },
			"i45": { "key": 60, "when": 5.5, "duration": 0.5 },
			"i46": { "key": 57, "when": 6, "duration": 0.5 },
			"i47": { "key": 57, "when": 7, "duration": 0.5 }
		},
		"i62": {
			"i64": { "key": 17, "when": 0, "duration": 0.5 },
			"i65": { "key": 17, "when": 0.5, "duration": 0.5 }
		},
		"i6a": {
			"i6c": { "key": 21, "when": 0, "duration": 0.5 },
			"i6d": { "key": 21, "when": 0.5, "duration": 0.5 }
		},
		"i81": {
			"i85": { "key": 72, "when": 0, "duration": 1 },
			"i86": { "key": 72, "when": 1, "duration": 0.5 },
			"i87": { "key": 71, "when": 1.5, "duration": 0.5 },
			"i88": { "key": 72, "when": 2, "duration": 0.5 },
			"i89": { "key": 71, "when": 2.5, "duration": 0.5 },
			"i8b": { "key": 71, "when": 3.5, "duration": 0.5 },
			"i8c": { "key": 72, "when": 4, "duration": 0.5 },
			"i8d": { "key": 76, "when": 4.5, "duration": 0.5 },
			"i8e": { "key": 69, "when": 5.5, "duration": 1 },
			"i8f": { "key": 72, "when": 8, "duration": 1 },
			"i90": { "key": 72, "when": 9, "duration": 0.5 },
			"i91": { "key": 71, "when": 9.5, "duration": 0.5 },
			"i93": { "key": 72, "when": 10, "duration": 0.5 },
			"i94": { "key": 71, "when": 10.5, "duration": 0.5 },
			"i95": { "key": 76, "when": 11.5, "duration": 1.5 },
			"i97": { "key": 69, "when": 11.5, "duration": 1.5 },
			"i98": { "key": 76, "when": 8, "duration": 1 },
			"i99": { "key": 76, "when": 9, "duration": 0.5 },
			"i9a": { "key": 74, "when": 9.5, "duration": 0.5 },
			"i9b": { "key": 76, "when": 10, "duration": 0.5 },
			"i9c": { "key": 79, "when": 10.5, "duration": 0.5 }
		}
	},
	"synthOpened": "i37",
	"savedAt": 1532291150,
	"patternOpened": "i82"
}
