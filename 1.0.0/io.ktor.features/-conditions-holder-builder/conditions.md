---
title: ConditionsHolderBuilder.conditions - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">ConditionsHolderBuilder</a> / <a href="./conditions.html">conditions</a></div>

# conditions

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">conditions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Preconditions applied to every response object to check if it should be compressed

