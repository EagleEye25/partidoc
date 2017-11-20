## walletsettings "setting" json

Manage wallet settings.

changeaddress {"address_standard":,"coldstakingaddress":}.
   - "address_standard": Change address for standard inputs.
   - "coldstakingaddress": Cold staking address for standard inputs.
stakelimit {"height":,int}.
   Don't stake above height, used in functional testing.

Empty json object will clear the setting.

stakelimit {}.
