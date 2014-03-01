	//basic map config with custom fills, mercator projection
	var map = new Datamap({
		scope: 'world',
		element: document.getElementById('container1'),
		projection: 'mercator',
		geographyConfig: {
			highlightBorderColor: '#666666',
			popupTemplate: function(geography, data) {
				return "<div class='hoverinfo'>" + data.country+': '+data.visitors +'</div>'
		},
		highlightBorderWidth: 1
		},

		fills: {
			defaultFill: '#00ffff',
			USA: '#ff00ff',
			DEU: '#5fa0ff',
			GBR: '#45baff',
			JPN: '#1ce3ff',
			CHN: '#39c6ff',
			CHE: '#22ddff',
			KOR: '#16e9ff',
			TUR: '#0cf3ff',
			BRA: '#29d6ff',
			CAN: '#28d7ff',
			IND: '#23dcff',
			AUS: '#13ecff',
			POL: '#0ff0ff',
			AUT: '#0ef1ff',
			FRA: '#18e7ff',
			MEX: '#0ff0ff',
			DNK: '#09f6ff',
			ESP: '#10efff',
			ITA: '#10efff',
			NLD: '#0cf3ff',
			COL: '#08f7ff',
			SGP: '#0af5ff',
			RUS: '#08f7ff',
			SWE: '#09f6ff',
			BEL: '#08f7ff',
			SVK: '#03fcff',
			CHN: '#07f8ff',
			ISR: '#06f9ff',
			FIN: '#04fbff',
			PAK: '#05faff',
			SAU: '#05faff',
			GTM: '#01feff',
			NZL: '#01feff',
			CMR: '#03fcff',
			ZAF: '#03fcff',
			CHL: '#02fdff',
			PRT: '#02fdff',
			NOR: '#02fdff',
			BOL: '#00ffff',
			HKG: '#02fdff',
			IRN: '#03fcff',
			ARG: '#02fdff',
			CZE: '#02fdff',
			MYS: '#03fcff',
			UKR: '#01feff',
			GRC: '#02fdff',
			ROU: '#01feff',
			IRL: '#01feff',
			VEN: '#01feff',
			LTU: '#01feff',
			HUN: '#01feff',
			IDN: '#01feff',
			PHL: '#01feff',
			EGY: '#01feff',
			ARE: '#01feff',
			SVN: '#01feff',
			THA: '#01feff',
			ARM: '#00ffff',
			MAR: '#01feff',
			VNM: '#00ffff',
			DZA: '#00ffff',
			NGA: '#00ffff',
			SRB: '#00ffff',
			EST: '#00ffff',
			BGR: '#00ffff',
			HRV: '#00ffff',
			MLT: '#00ffff',
			PER: '#00ffff',
			BGD: '#00ffff',
			QAT: '#00ffff',
			ISL: '#00ffff',
			BLR: '#00ffff',
			LUX: '#00ffff',
			YEM: '#00ffff',
			NPL: '#00ffff',
			TUN: '#00ffff',
			PRI: '#00ffff',
			BTN: '#00ffff',
			ETH: '#00ffff',
			KAZ: '#00ffff',
			LVA: '#00ffff',
			OMN: '#00ffff',
			BHR: '#00ffff',
			CRI: '#00ffff',
			CPV: '#00ffff',
			CYP: '#00ffff',
			GEO: '#00ffff',
			IRQ: '#00ffff',
			JOR: '#00ffff',
			KWT: '#00ffff',
			LIE: '#00ffff',
			PAN: '#00ffff',
			TTO: '#00ffff',
			ALB: '#00ffff',
			BIH: '#00ffff',
			ECU: '#00ffff',
			JAM: '#00ffff',
			KEN: '#00ffff',
			KHM: '#00ffff',
			LBN: '#00ffff',
			MNE: '#00ffff',
			MKD: '#00ffff',
			MMR: '#00ffff',
			MNG: '#00ffff',
			MAC: '#00ffff',
			MDV: '#00ffff',
			NER: '#00ffff',
			PSE: '#00ffff',
			PRY: '#00ffff',
			SEN: '#00ffff',
			SXM: '#00ffff',
			UGA: '#00ffff',
			URY: '#00ffff',
			VCT: '#00ffff',
			ZMB: '#00ffff',
		},

		data: {
			USA: {fillKey: 'USA', visitors: 3256, country: 'United States' },
			DEU: {fillKey: 'DEU', visitors: 1209, country: 'Germany' },
			GBR: {fillKey: 'GBR', visitors: 885, country: 'United Kingdom' },
			JPN: {fillKey: 'JPN', visitors: 368, country: 'Japan' },
			CHN: {fillKey: 'CHN', visitors: 725, country: 'China' },
			CHE: {fillKey: 'CHE', visitors: 434, country: 'Switzerland' },
			KOR: {fillKey: 'KOR', visitors: 284, country: 'Korea, Republic Of' },
			TUR: {fillKey: 'TUR', visitors: 162, country: 'Turkey' },
			BRA: {fillKey: 'BRA', visitors: 527, country: 'Brazil' },
			CAN: {fillKey: 'CAN', visitors: 518, country: 'Canada' },
			IND: {fillKey: 'IND', visitors: 454, country: 'India' },
			AUS: {fillKey: 'AUS', visitors: 248, country: 'Australia' },
			POL: {fillKey: 'POL', visitors: 195, country: 'Poland' },
			AUT: {fillKey: 'AUT', visitors: 190, country: 'Austria' },
			FRA: {fillKey: 'FRA', visitors: 314, country: 'France' },
			MEX: {fillKey: 'MEX', visitors: 193, country: 'Mexico' },
			DNK: {fillKey: 'DNK', visitors: 126, country: 'Denmark' },
			ESP: {fillKey: 'ESP', visitors: 208, country: 'Spain' },
			ITA: {fillKey: 'ITA', visitors: 211, country: 'Italy' },
			NLD: {fillKey: 'NLD', visitors: 160, country: 'Netherlands' },
			COL: {fillKey: 'COL', visitors: 107, country: 'Colombia' },
			SGP: {fillKey: 'SGP', visitors: 137, country: 'Singapore' },
			RUS: {fillKey: 'RUS', visitors: 105, country: 'Russian Federation' },
			SWE: {fillKey: 'SWE', visitors: 116, country: 'Sweden' },
			BEL: {fillKey: 'BEL', visitors: 103, country: 'Belgium' },
			SVK: {fillKey: 'SVK', visitors: 40, country: 'Slovakia' },
			CHN: {fillKey: 'CHN', visitors: 91, country: 'Taiwan, Province Of China' },
			ISR: {fillKey: 'ISR', visitors: 86, country: 'Israel' },
			FIN: {fillKey: 'FIN', visitors: 58, country: 'Finland' },
			PAK: {fillKey: 'PAK', visitors: 64, country: 'Pakistan' },
			SAU: {fillKey: 'SAU', visitors: 69, country: 'Saudi Arabia' },
			GTM: {fillKey: 'GTM', visitors: 20, country: 'Guatemala' },
			NZL: {fillKey: 'NZL', visitors: 24, country: 'New Zealand' },
			CMR: {fillKey: 'CMR', visitors: 41, country: 'Cameroon' },
			ZAF: {fillKey: 'ZAF', visitors: 47, country: 'South Africa' },
			CHL: {fillKey: 'CHL', visitors: 37, country: 'Chile' },
			PRT: {fillKey: 'PRT', visitors: 37, country: 'Portugal' },
			NOR: {fillKey: 'NOR', visitors: 34, country: 'Norway' },
			BOL: {fillKey: 'BOL', visitors: 11, country: 'Bolivia, Plurinational State Of' },
			HKG: {fillKey: 'HKG', visitors: 34, country: 'Hong Kong' },
			IRN: {fillKey: 'IRN', visitors: 46, country: 'Iran, Islamic Republic Of' },
			ARG: {fillKey: 'ARG', visitors: 38, country: 'Argentina' },
			CZE: {fillKey: 'CZE', visitors: 32, country: 'Czech Republic' },
			MYS: {fillKey: 'MYS', visitors: 39, country: 'Malaysia' },
			UKR: {fillKey: 'UKR', visitors: 25, country: 'Ukraine' },
			GRC: {fillKey: 'GRC', visitors: 33, country: 'Greece' },
			ROU: {fillKey: 'ROU', visitors: 23, country: 'Romania' },
			IRL: {fillKey: 'IRL', visitors: 24, country: 'Ireland' },
			VEN: {fillKey: 'VEN', visitors: 25, country: 'Venezuela, Bolivarian Republic Of' },
			LTU: {fillKey: 'LTU', visitors: 15, country: 'Lithuania' },
			HUN: {fillKey: 'HUN', visitors: 24, country: 'Hungary' },
			IDN: {fillKey: 'IDN', visitors: 15, country: 'Indonesia' },
			PHL: {fillKey: 'PHL', visitors: 18, country: 'Philippines' },
			EGY: {fillKey: 'EGY', visitors: 15, country: 'Egypt' },
			ARE: {fillKey: 'ARE', visitors: 18, country: 'United Arab Emirates' },
			SVN: {fillKey: 'SVN', visitors: 16, country: 'Slovenia' },
			THA: {fillKey: 'THA', visitors: 16, country: 'Thailand' },
			ARM: {fillKey: 'ARM', visitors: 7, country: 'Armenia' },
			MAR: {fillKey: 'MAR', visitors: 13, country: 'Morocco' },
			VNM: {fillKey: 'VNM', visitors: 11, country: 'Vietnam' },
			DZA: {fillKey: 'DZA', visitors: 12, country: 'Algeria' },
			NGA: {fillKey: 'NGA', visitors: 5, country: 'Nigeria' },
			SRB: {fillKey: 'SRB', visitors: 12, country: 'Serbia' },
			EST: {fillKey: 'EST', visitors: 6, country: 'Estonia' },
			BGR: {fillKey: 'BGR', visitors: 6, country: 'Bulgaria' },
			HRV: {fillKey: 'HRV', visitors: 8, country: 'Croatia' },
			MLT: {fillKey: 'MLT', visitors: 3, country: 'Malta' },
			PER: {fillKey: 'PER', visitors: 6, country: 'Peru' },
			BGD: {fillKey: 'BGD', visitors: 4, country: 'Bangladesh' },
			QAT: {fillKey: 'QAT', visitors: 6, country: 'Qatar' },
			ISL: {fillKey: 'ISL', visitors: 4, country: 'Iceland' },
			BLR: {fillKey: 'BLR', visitors: 3, country: 'Belarus' },
			LUX: {fillKey: 'LUX', visitors: 4, country: 'Luxembourg' },
			YEM: {fillKey: 'YEM', visitors: 2, country: 'Yemen' },
			NPL: {fillKey: 'NPL', visitors: 2, country: 'Nepal' },
			TUN: {fillKey: 'TUN', visitors: 1, country: 'Tunisia' },
			PRI: {fillKey: 'PRI', visitors: 3, country: 'Puerto Rico' },
			BTN: {fillKey: 'BTN', visitors: 3, country: 'Bhutan' },
			ETH: {fillKey: 'ETH', visitors: 2, country: 'Ethiopia' },
			KAZ: {fillKey: 'KAZ', visitors: 1, country: 'Kazakhstan' },
			LVA: {fillKey: 'LVA', visitors: 2, country: 'Latvia' },
			OMN: {fillKey: 'OMN', visitors: 2, country: 'Oman' },
			BHR: {fillKey: 'BHR', visitors: 2, country: 'Bahrain' },
			CRI: {fillKey: 'CRI', visitors: 1, country: 'Costa Rica' },
			CPV: {fillKey: 'CPV', visitors: 1, country: 'Cape Verde' },
			CYP: {fillKey: 'CYP', visitors: 2, country: 'Cyprus' },
			GEO: {fillKey: 'GEO', visitors: 1, country: 'Georgia' },
			IRQ: {fillKey: 'IRQ', visitors: 2, country: 'Iraq' },
			JOR: {fillKey: 'JOR', visitors: 2, country: 'Jordan' },
			KWT: {fillKey: 'KWT', visitors: 2, country: 'Kuwait' },
			LIE: {fillKey: 'LIE', visitors: 0, country: 'Liechtenstein' },
			PAN: {fillKey: 'PAN', visitors: 1, country: 'Panama' },
			TTO: {fillKey: 'TTO', visitors: 1, country: 'Trinidad And Tobago' },
			ALB: {fillKey: 'ALB', visitors: 1, country: 'Albania' },
			BIH: {fillKey: 'BIH', visitors: 0, country: 'Bosnia And Herzegovina' },
			ECU: {fillKey: 'ECU', visitors: 1, country: 'Ecuador' },
			JAM: {fillKey: 'JAM', visitors: 1, country: 'Jamaica' },
			KEN: {fillKey: 'KEN', visitors: 1, country: 'Kenya' },
			KHM: {fillKey: 'KHM', visitors: 1, country: 'Cambodia' },
			LBN: {fillKey: 'LBN', visitors: 1, country: 'Lebanon' },
			MNE: {fillKey: 'MNE', visitors: 0, country: 'Montenegro' },
			MKD: {fillKey: 'MKD', visitors: 0, country: 'Macedonia, The Former Yugoslav Republic Of' },
			MMR: {fillKey: 'MMR', visitors: 1, country: 'Myanmar' },
			MNG: {fillKey: 'MNG', visitors: 1, country: 'Mongolia' },
			MAC: {fillKey: 'MAC', visitors: 0, country: 'Macao' },
			MDV: {fillKey: 'MDV', visitors: 1, country: 'Maldives' },
			NER: {fillKey: 'NER', visitors: 1, country: 'Niger' },
			PSE: {fillKey: 'PSE', visitors: 0, country: 'Palestinian Territory, Occupied' },
			PRY: {fillKey: 'PRY', visitors: 0, country: 'Paraguay' },
			SEN: {fillKey: 'SEN', visitors: 1, country: 'Senegal' },
			SXM: {fillKey: 'SXM', visitors: 1, country: 'Sint Maarten' },
			UGA: {fillKey: 'UGA', visitors: 1, country: 'Uganda' },
			URY: {fillKey: 'URY', visitors: 1, country: 'Uruguay' },
			VCT: {fillKey: 'VCT', visitors: 1, country: 'Saint Vincent And The Grenadines' },
			ZMB: {fillKey: 'ZMB', visitors: 1, country: 'Zambia' },
		}
	})
