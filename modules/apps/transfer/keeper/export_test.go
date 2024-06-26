package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/ibc-go/v8/modules/apps/transfer/types"
)

// SetDenomTraces is a wrapper around iterateDenomTraces for testing purposes.
func (k Keeper) SetDenomTrace(ctx sdk.Context, denomTrace types.DenomTrace) {
	k.setDenomTrace(ctx, denomTrace)
}

// IterateDenomTraces is a wrapper around iterateDenomTraces for testing purposes.
func (k Keeper) IterateDenomTraces(ctx sdk.Context, cb func(denomTrace types.DenomTrace) bool) {
	k.iterateDenomTraces(ctx, cb)
}

// GetAllDenomTraces returns the trace information for all the denominations.
func (k Keeper) GetAllDenomTraces(ctx sdk.Context) []types.DenomTrace {
	var traces []types.DenomTrace
	k.iterateDenomTraces(ctx, func(denomTrace types.DenomTrace) bool {
		traces = append(traces, denomTrace)
		return false
	})

	return traces
}

// TokenFromCoin is a wrapper around tokenFromCoin for testing purposes.
func (k Keeper) TokenFromCoin(ctx sdk.Context, coin sdk.Coin) (types.Token, error) {
	return k.tokenFromCoin(ctx, coin)
}

// CreatePacketDataBytesFromVersion is a wrapper around createPacketDataBytesFromVersion for testing purposes
func CreatePacketDataBytesFromVersion(appVersion, sender, receiver, memo string, tokens types.Tokens) []byte {
	return createPacketDataBytesFromVersion(appVersion, sender, receiver, memo, tokens)
}
