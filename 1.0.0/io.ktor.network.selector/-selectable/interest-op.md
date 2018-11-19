---
title: Selectable.interestOp - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="index.html">Selectable</a> / <a href="./interest-op.html">interestOp</a></div>

# interestOp

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">interestOp</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/state">state</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Apply <a href="interest-op.html#io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/state">state</a> flag of <a href="interest-op.html#io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/interest">interest</a> to <a href="interested-ops.html">interestedOps</a>. Notice that is doesn't actually change selection key.

