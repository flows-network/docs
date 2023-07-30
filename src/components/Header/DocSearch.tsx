import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { createPortal } from 'preact/compat';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import type { DocSearchTranslation } from '../../i18n/translation-checkers';

interface Props {
	lang?: string;
	labels: Omit<DocSearchTranslation, 'button' | 'shortcutLabel'>;
}

export default function Search({ lang = 'en', labels }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef(document.getElementById('docsearch-search-button'));
	const [initialQuery, setInitialQuery] = useState<string>();

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e: KeyboardEvent) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	useEffect(() => {
		searchButtonRef.current?.addEventListener('click', onOpen);
		return () => searchButtonRef.current?.removeEventListener('click', onOpen);
	}, [searchButtonRef.current, onOpen]);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	if (!isOpen) return null;

	return createPortal(
		<DocSearchModal
			initialQuery={initialQuery}
			initialScrollY={window.scrollY}
			onClose={onClose}
			indexName="docsearch"
			appId="R2IYF7ETH7"
			apiKey="599cec31baffa4868cae4e79f180729b"
			searchParameters={{ facetFilters: [[`lang:${lang}`]] }}
			insights
			getMissingResultsUrl={({ query }: { query: string }) =>
				`https://github.com/flows-network/issues/new?title=Missing+results+for+query+%22${encodeURIComponent(
					query
				)}%22`
			}
			transformItems={(items) => {
				return items.map((item) => {
					// We transform the absolute URL into a relative URL to
					// work better on localhost, preview URLS.
					const url = new URL(item.url);
					if (url.hash === '#overview') url.hash = '';
					return {
						...item,
						url: url.href.replace(url.origin, ''),
					};
				});
			}}
			placeholder={labels.placeholder}
			translations={labels.modal}
			resultsFooterComponent={() => (
				<div style={{ marginBlock: '2em' }}>
					<p>{labels.resultsFooterLede}</p>
					<ul style={{ display: 'flex', gap: '1em', marginBlock: '0.5em', flexWrap: 'wrap' }}>
						<li>
							<a href="https://flows.network/integrations/">{labels.resultsFooterIntegrations}</a>
						</li>
						<li>
							<a href="https://flows.network/themes/">{labels.resultsFooterThemes}</a>
						</li>
						<li>
							<a href="https://discord.gg/TrPfq677au">{labels.resultsFooterDiscord}</a>
						</li>
					</ul>
				</div>
			)}
		/>,
		document.body
	);
}
