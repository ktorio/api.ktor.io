---
title: SelectorManagerSupport.select - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="index.html">SelectorManagerSupport</a> / <a href="./select.html">select</a></div>

# select

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">select</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../-selector-manager/select.html">SelectorManager.select</a>

Suspends until <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</a> is selected for <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</a>
May cause manager to allocate and run selector instance if not yet created.

Only one selection is allowed per <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</a> per <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</a> but you can
select for different interests for the same selectable simultaneously.
In other words you can select for read and write at the same time but should never
try to read twice for the same selectable.

