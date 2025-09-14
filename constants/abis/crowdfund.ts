export const crowdfundAbi = [
  {
    'type': 'constructor',
    'inputs': [
      {
        'name': 'initialOwner',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': '_platformAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'PERCENTAGE_BASE',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'calculateAmounts',
    'inputs': [
      {
        'name': 'totalAmount',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [
      {
        'name': 'platformFee',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'netAmount',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'campaignCount',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'campaigns',
    'inputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [
      {
        'name': 'id',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'beneficiary',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'fundingGoal',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'deadline',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'currentAmount',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'status',
        'type': 'uint8',
        'internalType': 'enum CrowdFunding.CampaignStatus',
      },
      {
        'name': 'tokenAddress',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'contributorsCount',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'refundDeadline',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'claimExpiredRefunds',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'contribute',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'payable',
  },
  {
    'type': 'function',
    'name': 'contributeERC20',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': '_amount',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'createCampaign',
    'inputs': [
      {
        'name': '_beneficiary',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': '_fundingGoal',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': '_deadlineTimestamp',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': '_tokenAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'emergencyWithdraw',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'finalizeCampaign',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'getCampaignRefundDeadline',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getUserContribution',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': '_contributor',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'isRefundPeriodExpired',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'owner',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'platformAddress',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'platformFeePercentage',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'refundPeriodDays',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'renounceOwnership',
    'inputs': [],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'requestRefund',
    'inputs': [
      {
        'name': '_campaignId',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'transferOwnership',
    'inputs': [
      {
        'name': 'newOwner',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'updatePlatformAddress',
    'inputs': [
      {
        'name': '_newPlatformAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'updatePlatformFeePercentage',
    'inputs': [
      {
        'name': '_newFeePercentage',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'updateRefundPeriod',
    'inputs': [
      {
        'name': '_newRefundPeriodDays',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'event',
    'name': 'CampaignCreated',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'beneficiary',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'fundingGoal',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'deadline',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'tokenAddress',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'CampaignFailed',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'CampaignSuccessful',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'totalAmount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'ContributionMade',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'contributor',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'amount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'EmergencyWithdrawal',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'to',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'tokenAddress',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'amount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'ExpiredRefundsClaimed',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'tokenAddress',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'amount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'FundsWithdrawn',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'beneficiary',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'netAmount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'platformFee',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'OwnershipTransferred',
    'inputs': [
      {
        'name': 'previousOwner',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'newOwner',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'PlatformAddressUpdated',
    'inputs': [
      {
        'name': 'oldPlatformAddress',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'newPlatformAddress',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'PlatformFeePercentageUpdated',
    'inputs': [
      {
        'name': 'oldFeePercentage',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'newFeePercentage',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'RefundIssued',
    'inputs': [
      {
        'name': 'campaignId',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'contributor',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'amount',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'RefundPeriodUpdated',
    'inputs': [
      {
        'name': 'oldRefundPeriodDays',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'newRefundPeriodDays',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'error',
    'name': 'ArithmeticOverflow',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'CampaignDeadlinePassed',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'CampaignNotActive',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'CampaignNotFailed',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'CampaignNotFound',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'CampaignNotSuccessful',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InsufficientAllowance',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InsufficientBalance',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidAddress',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidAmount',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidDuration',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidFeePercentage',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidFundingGoal',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidRefundPeriod',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'InvalidTokenAddress',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'NoContributionFound',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'NoFundsToWithdraw',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'OwnableInvalidOwner',
    'inputs': [
      {
        'name': 'owner',
        'type': 'address',
        'internalType': 'address',
      },
    ],
  },
  {
    'type': 'error',
    'name': 'OwnableUnauthorizedAccount',
    'inputs': [
      {
        'name': 'account',
        'type': 'address',
        'internalType': 'address',
      },
    ],
  },
  {
    'type': 'error',
    'name': 'ReentrancyGuardReentrantCall',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'RefundPeriodExpired',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'RefundPeriodNotExpired',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'StringTooLong',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'TransferFailed',
    'inputs': [],
  },
] as const;
